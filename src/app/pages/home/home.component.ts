import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  language = 'sanskrit';

  rudrastakam = {
    sanskrit: `॥ श्रीरुद्राष्टकम् ॥

नमामीशमीशान निर्वाणरूपं
विभुं व्यापकं ब्रह्मवेदस्वरूपम्।
निजं निर्गुणं निर्विकल्पं निरीहं
चिदाकाशमाकाशवासं भजेऽहम्॥१॥

निराकारमोङ्कारमूलं तुरीयं
गिराज्ञानगोतीतमीशं गिरीशम्।
करालं महाकालकालं कृपालं
गुणागार संसारपारं नतोऽहम्॥२॥

तुषाराद्रिसंकाशगौरं गभीरं
मनोभूतकोटिप्रभाश्रीशरीरम्।
स्फुरन्मौलिकल्लोलिनीचारुगङ्गा
लसद्भालबालेन्दुकण्ठे भुजङ्गा॥३॥

चलत्कुण्डलं भ्रूसुनेत्रं विशालं
प्रसन्नाननं नीलकण्ठं दयालुम्।
मृगाधीशचर्माम्बरं मुण्डमालं
प्रियं शङ्करं सर्वनाथं भजामि॥४॥

प्रचण्डं प्रकृष्टं प्रगल्भं परेशं
अखण्डं अजं भानुकोटिप्रकाशम्।
त्रयःशूलनिर्मूलनं शूलपाणिं
भजेऽहं भवानीपतिं भावगम्यम्॥५॥

कलातीतकल्याण कल्पान्तकारी
सदा सज्जनानन्ददाता पुरारि।
चिदानन्दसन्दोह मोहापहारी
प्रसीद प्रसीद प्रभो मन्मथारि॥६॥

न यावद् उमानाथ पादारविन्दं
भजन्तीह लोके परे वा नराणाम्।
न तावत्सुखं शान्ति सन्तापनाशं
प्रसीद प्रभो सर्वभूताधिवासम्॥७॥

न जानामि योगं जपं नैव पूजां
नतोऽहं सदा सर्वदा शम्भु तुभ्यम्।
जरा जन्म दुःखौघ तातप्यमानं
प्रभो पाहि आपन्नमामीश शम्भो॥८॥`,
    english: `॥ Shree Rudrastakam ॥

Namami ishameeshaana nirvaanarupam
Vibhum vyaapakam brahmavedasvarupam.
Nijam nirgunam nirvikalpam niriiham
Chida akaasha maa kaashavaasam bhaje'ham.॥1॥

Niraakaar amonkaar amoolam turiiyam
Giraa jnyaana goti taameesham gireesham.
Karaalam mahaakaala kaalam kripaalam
Gunaagaar sansaara paaram nato'ham.॥2॥

Tushaara adri sankaasha gauram gabheeram
Manobhoot akoti prabhaa shreeshariram.
Sphura nmaulika lolinii chaaruganga
Lasad bhaala abaal endukanthhe bhujanga.॥3॥

Chalatkundalam bhroosunetraam vishaalam
Prasannaananam neelakantham dayaallum.
Mriga adhees hacharmaambarama mundamaalam
Priyam shankaram sarvanaatham bhajaami.॥4॥

Prachandam prakrushtam pragalbham paresham
Akhandam ajam bhaanukotiprakasham.
Trayah shoolani rmoolanam shoolapaanim
Bhaje'ham bhavaaniapatim bhaavagamyam.॥5॥

Kalaateetakalyaana kalpaantakaari
Sadaa sajjanaanandadata puraari.
Chidaa nanda sandoha mohaapahaari
Praseed praseed prabho manmathaari.॥6॥

Na yaavad umaanaatha paadaaravindam
Bhajantiih loke pare vaa naraanaam.
Na taavatsukham shaanti santapanaasham
Praseed prabho sarvabhootadhivaasam.॥7॥

Na jaanaami yogam japam naiva poojaam
Nato'ham sadaa sarvadaa shambhu tubhyam.
Jaraa janma duhkhaaugh taatapyamaanam
Prabho paahi aapannamaamiish shambho.॥8॥`,
    odiya: `॥ ରୁଦ୍ରାଷ୍ଟକମ୍ ॥ 

    
ନମାମୀଶମୀଶାନ ନିର୍ଵାଣରୂପଂ
ଵିଭୁଂ ଵ୍ୟାପକଂ ବ୍ରହ୍ମଵେଦ-ସ୍ଵରୂପମ୍ ।
ନିଜଂ ନିର୍ଗୁଣଂ ନିର୍ଵିକଲ୍ପଂ ନିରୀହଂ
ଚିଦାକାଶ-ମାକାଶଵାସଂ ଭଜେଽହମ୍ ॥ 1 ॥

ନିରାକାରମୋଂକାରମୂଲଂ ତୁରୀୟଂ
ଗିରାଜ୍ଞାନଗୋତୀତମୀଶଂ ଗିରୀଶମ୍ ।
କରାଲଂ ମହାକାଲକାଲଂ କୃପାଲୁଂ
ଗୁଣାଗାର-ସଂସାରପାରଂ ନତୋଽହମ୍ ॥ 2 ॥

ତୁଷାରାଦ୍ରି-ସଂକାଶଗୌରଂ ଗଭୀରଂ
ମନୋଭୂତକୋଟି-ପ୍ରଭାସୀ ଶରୀରମ୍ ।
ସ୍ଫୁରନ୍ମୌଲିକଲ୍ଲୋଲିନୀ ଚାରୁଗଂଗା
ଲସଦ୍ଭାଲ-ବାଲେଂଦୁ କଂଠେ ଭୁଜଂଗମ୍ ॥ 3 ॥

ଚଲତ୍କୁଂଡଲଂ ଶୁଭ୍ରନେତ୍ରଂ ଵିଶାଲଂ [ଭୄସୁନେତ୍ରଂ ଵିଶାଲଂ]
ପ୍ରସନ୍ନାନନଂ ନୀଲକଂଠଂ ଦୟାଲୁମ୍ ।
ମୃଗାଧୀଶ-ଚର୍ମାଂବରଂ ମୁଂଡମାଲଂ
ପ୍ରିୟଂ ଶଂକରଂ ସର୍ଵନାଥଂ ଭଜାମି ॥ 4 ॥

ପ୍ରଚଂଡଂ ପ୍ରକୃଷ୍ଟଂ ପ୍ରଗଲ୍ଭଂ ପରେଶଂ
ଅଖଂଡଂ ଭଜେ ଭାନୁକୋଟିପ୍ରକାଶମ୍ ।
ତ୍ରୟୀ-ଶୂଲ-ନିର୍ମୂଲନଂ ଶୂଲପାଣିଂ
ଭଜେଽହଂ ଭଵାନୀପତିଂ ଭାଵଗମ୍ୟମ୍ ॥ 5 ॥

କଲାତୀତ-କଲ୍ୟାଣ-କଲ୍ପାଂତକାରୀ
ସଦା ସଜ୍ଜନାନଂଦ-ଦାତା ପୁରାରୀ ।
ଚିଦାନଂଦ ସଂଦୋହମୋହାପହାରୀ
ପ୍ରସୀଦ ପ୍ରସୀଦ ପ୍ରଭୋ ମନ୍ମଥାରୀ ॥ 6 ॥

ନ ୟାଵଦୁମାନାଥ-ପାଦାରଵିଂଦଂ
ଭଜଂତୀହ ଲୋକେ ପରେ ଵା ନରାଣାମ୍ ।
ନ ତାଵତ୍ସୁଖଂ ଶାଂତି ସଂତାପନାଶଂ
ପ୍ରସୀଦ ପ୍ରଭୋ ସର୍ଵଭୂତାଧିଵାସମ୍ ॥ 7 ॥

ନ ଜାନାମି ୟୋଗଂ ଜପଂ ନୈଵ ପୂଜାଂ
ନତୋଽହଂ ସଦା ସର୍ଵଦା ଦେଵ ତୁଭ୍ୟମ୍ ।
ଜରା-ଜନ୍ମ-ଦୁଃଖୌଘତାତପ୍ୟମାନଂ
ପ୍ରଭୋ ପାହି ଶାପାନ୍ନମାମୀଶ ଶଂଭୋ ॥ 8 ॥`

  };

}