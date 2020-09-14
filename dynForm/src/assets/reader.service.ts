import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor() { }

  AsyncRead(File)
  {
    return new Promise((Resolve, Reject) =>
    {
      let Reader = new FileReader();

      Reader.onload = () => { Resolve(Reader.result);};

      Reader.onerror = Reject;

      Reader.readAsArrayBuffer(File);
    });
  }
}
