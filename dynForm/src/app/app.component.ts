import {Component, ElementRef, ViewChild} from '@angular/core';
import {UrlHandler} from '../assets/UrlHandler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Forms';

  @ViewChild('FileBrowser') fileBrowser: ElementRef;

  File: string;

  BrowseFile() { this.File = this.fileBrowser.nativeElement.files[0]; }

  Download() { window.open(UrlHandler.URL); }
}
