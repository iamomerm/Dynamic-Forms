export class UrlHandler
{
  static URL: string;

  static SetURL(Data: string)
  {
    if (Data)
    {
      let TheBlob = new Blob([Data], { type: 'text' });
      UrlHandler.URL = window.URL.createObjectURL(TheBlob);
    }

    else { UrlHandler.URL = ''; }
  }
}
