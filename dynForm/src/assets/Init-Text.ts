export function InitText(): string
{
  let Text: string =
    `- Suggested Style (CSS) -

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

#Container { display: flex; flex-direction: row; justify-content: center; width: 100%; }

.Column { display: flex; flex-direction: column; justify-content: center; width: 375px; height: 100%; background: white; border-radius: 2px; padding: 25px; }

.Row-Center { display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 25px; }

.Row-SB { display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 25px; }

#Title { font-family: "Quicksand"; font-size: 18px; color: grey; text-decoration: underline; margin-bottom: 15px; }

.Label { font-family: "Quicksand"; font-size: 15px; color: #80008099; }

.Text-Input { width: 120px; font-family: "Quicksand"; font-size: 15px; color: #80008099; border: 1px solid lightgrey; border-radius: 5px; box-sizing: border-box; }

.Text-Input::placeholder { font-family: "Quicksand"; font-size: 15px; color: #80008099; }

.Color-Input { width: 120px; border: 1px solid lightgrey; border-radius: 5px; box-sizing: border-box; }

.Date-Input { width: 120px; font-family: "Quicksand"; font-size: 10px; color: #80008099; border: 1px solid lightgrey; border-radius: 5px; box-sizing: border-box; }

#Submit-Btn { width: 90px; height: 25px; margin-top: 15px; font-family: "Quicksand"; font-size: 15px; background: #dcdcdc; color: #80008099; text-align: center; border: none; border-radius: 3px; outline: none; }

#Submit-Btn:hover { background: #80008050; color: #dcdcdc; }`

  return Text;
}
