import { Injectable } from '@angular/core';
import {AppendText} from './Append-Text';
import {Wrap} from './Wrap';
import {CloseWrap} from './Wrap';

@Injectable({
  providedIn: 'root'
})
export class HtmlGeneratorService {

  constructor() { }

  GenerateHTML(ObjectString)
  {
    let Tab = '    ';

    let Obj = JSON.parse(ObjectString);

    let HTMLText = Wrap(`form id="Container"`);

    HTMLText = AppendText(HTMLText, Tab + Wrap(`div class="Column"`));

    HTMLText = AppendText(HTMLText,Tab + Tab + Wrap(`div class="Row-Center"`) + Wrap(`label id="Title"`) + Obj['Title'] + CloseWrap(`label`) + CloseWrap(`div`));

    let Fields: any = Obj['Fields'];

    for (let Index = 0; Index < Fields.length; Index++)
    {
      /* Text */
      if (Obj['Fields'][Index]['Type'] == 'Text')
      {
        HTMLText = AppendText(HTMLText,  Tab + Tab + Wrap(`div class="Row-SB"`));

        HTMLText = AppendText(HTMLText,  Tab + Tab + Tab + Wrap(`label class="Label"`) + Obj['Fields'][Index]['Label'] + CloseWrap(`label`));

        HTMLText = AppendText(HTMLText,  Tab + Tab + Tab + Wrap(`input class="Text-Input" placeholder="` + Obj['Fields'][Index]['Placeholder'] + `" id="` + Obj['Fields'][Index]['ID'] + `"`));

        HTMLText = AppendText(HTMLText,  Tab + Tab + CloseWrap(`div`));
      }

      /* Color */
      else if (Obj['Fields'][Index]['Type'] == 'Color')
      {
        HTMLText = AppendText(HTMLText, Tab + Tab + Wrap(`div class="Row-SB"`));

        HTMLText = AppendText(HTMLText, Tab + Tab + Tab + Wrap(`label class="Label"`) + Obj['Fields'][Index]['Label'] + CloseWrap(`label`));

        HTMLText = AppendText(HTMLText, Tab + Tab + Tab + Wrap(`input class="Color-Input" type="color" value="#dcdcdc" id="` + Obj['Fields'][Index]['ID'] + `"`));

        HTMLText = AppendText(HTMLText, Tab + Tab + CloseWrap(`div`));
      }

      /* Date */
      else if (Obj['Fields'][Index]['Type'] == 'Date')
      {
        HTMLText = AppendText(HTMLText, Tab + Tab + Wrap(`div class="Row-SB"`));

        HTMLText = AppendText(HTMLText, Tab + Tab + Tab + Wrap(`label class="Label"`) + Obj['Fields'][Index]['Label'] + CloseWrap(`label`));

        HTMLText = AppendText(HTMLText, Tab + Tab + Tab + Wrap(`input class="Date-Input" type="date" id="` + Obj['Fields'][Index]['ID'] + `"`));

        HTMLText = AppendText(HTMLText, Tab + Tab + CloseWrap(`div`));
      }
    }

    HTMLText = AppendText(HTMLText, Tab + Tab + Wrap(`div class="Row-Center"`));

    HTMLText = AppendText(HTMLText, Tab + Tab + Tab + Wrap(`button type="submit" id="Submit-Btn"`) + `Submit` + CloseWrap(`button`));

    HTMLText = AppendText(HTMLText, Tab + Tab + CloseWrap(`div`));

    HTMLText = AppendText(HTMLText, Tab + CloseWrap(`div`));

    HTMLText = AppendText(HTMLText, CloseWrap(`form`));

    return HTMLText;
  }
}
