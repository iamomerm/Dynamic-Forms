import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {ReaderService} from '../../assets/reader.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})

export class DynamicformComponent implements OnInit {

  @Input('File') _File: any;

  TheForm: object = {};

  constructor(private RS: ReaderService) { }

  ngOnInit(): void {  }

  async ngOnChanges()
  {
    try
    {
      this.TheForm = {};

      let TempForm: any = await this.RS.AsyncRead(this._File);

      let TheDecoder = new TextDecoder();

      let DecodedString = TheDecoder.decode(TempForm);

      this.TheForm = JSON.parse(DecodedString);
    }

    catch { this.TheForm = undefined; console.log('Invalid JSON File (' + this._File.name + ')!'); }
  }
}
