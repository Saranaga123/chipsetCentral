import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
interface FulfillmentMessage {
  text?: {
      text: string[];
  };
}

interface QueryResult {
  fulfillmentText?: string;
  fulfillmentMessages?: FulfillmentMessage[];
}

interface ApiResponse {
  queryResult: QueryResult;
}
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent {
  userMessage: string = '';
  messages: { text: string, isUser: boolean }[] = [];
  loading:boolean=false
  full:boolean=true
  @ViewChild('chatBody') private chatBody!: ElementRef;
  constructor(
    private router: Router,
    private landingservice : LandingService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
  ) {
  }
  async addMessagesWithDelay(messages: { text: string, isUser: boolean }[], delay: number) {
    for (const message of messages) {
        this.messages.push(message);
        await new Promise(resolve => setTimeout(resolve, delay));
        this.loading = false; // Delay in milliseconds
    }
    this.loading = false; // Set loading to false after all messages have been added
  }
  async handleResponse(res: ApiResponse) {
    let messagesToAdd: { text: string, isUser: boolean }[] = [];

    if (res.queryResult.fulfillmentMessages && res.queryResult.fulfillmentMessages.length > 0) {
        messagesToAdd = res.queryResult.fulfillmentMessages.map((msg: FulfillmentMessage) => {
            if (msg.text && msg.text.text) {
                return { text: msg.text.text.join(' '), isUser: false };
            } else {
                return { text: 'Unknown response format', isUser: false };
            }
        });

        // Call the async method to add messages with a delay
        await this.addMessagesWithDelay(messagesToAdd, 1500); // 1000 milliseconds = 1 second
    } else if (res.queryResult.fulfillmentText) {
        this.messages.push({ text: res.queryResult.fulfillmentText, isUser: false });
        this.loading = false;
    }
}
  ngOnInit(): void {

  }
  tooglechat(){
    if(this.full==true){
      this.full = false
    }else{
      this.full=true
    }
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const element = this.chatBody.nativeElement;
    element.scrollTop = element.scrollHeight;
  }
  sendMessage(): void {
    if (this.userMessage.trim()) {
      // Add the user message
      this.messages.push({ text: this.userMessage, isUser: true });

      // Example AI response
      this.submituserdata()

      // Clear the input
      this.userMessage = '';
    }
  }

  submituserdata(){
    this.loading=true
    let obj = {
                  "queryInput": {
                      "text": {
                          "text": this.userMessage,
                          "languageCode": "en"
                      }
                  }
              }
          this.landingservice.requestAIBOT(obj).subscribe(
            (response) => {
              let res = response
              if (res) {
                 this.handleResponse(res)


            }
            },
            (error) => {
              this.loading=false
            }
          );
        }

}
