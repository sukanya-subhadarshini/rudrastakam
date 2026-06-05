import { Component } from '@angular/core';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css']
})
export class MeaningComponent {

  language = 'english';

  meanings = {
    english: `
Verse 1:
Lord Shiva is the embodiment of liberation and pure consciousness.

Verse 2:
Shiva is formless, eternal and beyond human understanding.

Verse 3:
His divine form shines like the Himalayas and is adorned with Ganga and the moon.

Verse 4:
He is compassionate and protects all beings.

Verse 5:
He destroys suffering and guides devotees towards truth.

Verse 6:
He removes ignorance and grants peace and bliss.

Verse 7:
Without devotion to Shiva, true happiness cannot be attained.

Verse 8:
The devotee surrenders completely and seeks Shiva's protection.
`,

    hindi: `
श्लोक 1:
भगवान शिव मोक्ष और परम चेतना के स्वरूप हैं।

श्लोक 2:
शिव निराकार, शाश्वत और मानव समझ से परे हैं।

श्लोक 3:
उनका दिव्य स्वरूप हिमालय के समान उज्ज्वल है।

श्लोक 4:
वे दयालु हैं और सभी प्राणियों की रक्षा करते हैं।

श्लोक 5:
वे दुखों का नाश करते हैं और सत्य का मार्ग दिखाते हैं।

श्लोक 6:
वे अज्ञान को दूर कर शांति और आनंद प्रदान करते हैं।

श्लोक 7:
शिव भक्ति के बिना सच्चा सुख प्राप्त नहीं होता।

श्लोक 8:
भक्त पूर्ण समर्पण के साथ शिव से रक्षा की प्रार्थना करता है।
`,

    odia: `
ଶ୍ଲୋକ ୧:
ଭଗବାନ ଶିବ ମୋକ୍ଷ ଓ ପରମ ଚେତନାର ସ୍ୱରୂପ।

ଶ୍ଲୋକ ୨:
ଶିବ ନିରାକାର, ଶାଶ୍ୱତ ଓ ସମସ୍ତ ଜ୍ଞାନରୁ ଅତୀତ।

ଶ୍ଲୋକ ୩:
ତାଙ୍କର ଦିବ୍ୟ ରୂପ ହିମାଳୟ ପରି ଉଜ୍ଜ୍ୱଳ।

ଶ୍ଲୋକ ୪:
ସେ କୃପାଳୁ ଏବଂ ସମସ୍ତଙ୍କ ରକ୍ଷକ।

ଶ୍ଲୋକ ୫:
ସେ ସମସ୍ତ ଦୁଃଖର ନାଶ କରନ୍ତି।

ଶ୍ଲୋକ ୬:
ସେ ଅଜ୍ଞାନ ଦୂର କରି ଶାନ୍ତି ଓ ଆନନ୍ଦ ପ୍ରଦାନ କରନ୍ତି।

ଶ୍ଲୋକ ୭:
ଶିବ ଭକ୍ତି ବିନା ସତ୍ୟ ସୁଖ ମିଳେ ନାହିଁ।

ଶ୍ଲୋକ ୮:
ଭକ୍ତ ଶିବଙ୍କ ଶରଣ ନେଇ ରକ୍ଷା ପାଇଁ ପ୍ରାର୍ଥନା କରେ।
`
  };
}