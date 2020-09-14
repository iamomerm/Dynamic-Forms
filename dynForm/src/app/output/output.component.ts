import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ReaderService} from '../../assets/reader.service';
import {HtmlGeneratorService} from '../../assets/html-generator.service';
import {InitText} from '../../assets/Init-Text';
import {AppendText} from '../../assets/Append-Text';
import {UrlHandler} from '../../assets/UrlHandler';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input('File') _File: any;

  TextOutput: string;

  TextRows: number;

  constructor(private RS: ReaderService, private HG: HtmlGeneratorService) { }

  ngOnInit(): void { }

  GetTextRows(Text: string): number { return Text.split('\n').length; }

  async ngOnChanges()
  {
    try
    {
      /* Decode File Content */
      let TempForm: any = await this.RS.AsyncRead(this._File);

      let TheDecoder = new TextDecoder();

      let DecodedString = TheDecoder.decode(TempForm);

      /* Genearate CSS Output */

      this.TextOutput = InitText();

      /* Generate HTML Output */

      this.TextOutput = AppendText(this.TextOutput,'\n' + '- HTML -' + '\n');

      let HTMLDocument:string;

      try { HTMLDocument = this.HG.GenerateHTML(DecodedString); }

      catch { /* Pass */ }

      if (HTMLDocument) { this.TextOutput = AppendText(this.TextOutput, HTMLDocument); }

      this.TextRows = this.GetTextRows(this.TextOutput);

      UrlHandler.SetURL(this.TextOutput);
    }

    catch { /* Pass */ }
  }
}
