const dizins = {
  main: {
    text: `
Dizinler ~~ Dizinler
~ hub
~ mastermenu
`
  },
  hub: {
    text: `
Dizinler ~~ Dizinler
~ okuma
~ yazma
~ izleme
~ dinleme
~ oyun
`
  },
  mastermenu: {
    text: `
Dizinler ~~ Dizinler
~ seçenekler
~ donatılar
~ kontrol
        `
  },
  donatılar: {
    text: `
Dizinler ~~ Dizinler
~ görevyöneticisi
~ hesapmakinesi
~ çizim
~ notlar`
  },
  kontrol: {
    text: `
Dizinler ~~ Dizinler
~ kapat`
  }
};
var dizin = "main";

const yardim = () => {
  const text = `
Yardım ~~ Komutlar 
yardım - Bu komutu kullanarak yardım alabilirsiniz.
hakkında - Bu komutu kullanarak uygulama hakkında bilgiler alabilirsiniz.
gir - Bu komutu kullanarak bir dizine veya bir uygulamaya girebilirsiniz.
çık - Bu komutu kullanarak bir dizinden veya bir uygulamadan çıkabilirsiniz.
dizinler - Bu komutu kullanarak dizinleri görebilirsiniz.
    `;
  return { text: text, command: "yardım" };
};

const hakkinda = () => {
  const text = `
Hakkında ~~ Bilgiler
Uygulama Adı: MasterKid
Uygulama Sürümü: 1.0.0
Uygulama Geliştiricisi:  Furkan Aydın, Oğuzhan Sakaoğlu, Mustafa Bacacı, Semih Bahadır Harmancı, Duygu Asena Kaya
Uygulama Geliştirme Tarihi: 2023
Uygulama Geliştirme Yeri: Türkiye
Uygulama Teknolojileri 
~ React, Redux, Electron, JavaScript

`;
  return { text: text, command: "hakkında" };
};

const dizinler = (dizin) => {
  return { text: dizins[dizin]?.text, command: "dizinler" };
};

const gir = (action) => {
  action == "main" && (dizin = "main");
  action == "hub" && (dizin = "hub");
  action == "mastermenu" && (dizin = "mastermenu");
  action == "donatılar" && (dizin = "donatılar");
  action == "kontrol" && (dizin = "kontrol");
  action == "okuma" && (dizin = "okuma");
  action == "yazma" && (dizin = "yazma");
  action == "izleme" && (dizin = "izleme");
  action == "dinleme" && (dizin = "dinleme");
  action == "oyun" && (dizin = "oyun");
  action == "yönetim" && (dizin = "yönetim");
  action == "seçenekler" && (dizin = "seçenekler");
  action == "görevyöneticisi" && (dizin = "görev yöneticisi");
  action == "hesapmakinesi" && (dizin = "hesap makinesi");
  action == "çizim" && (dizin = "çizim");
  action == "notlar" && (dizin = "notlar");
  
  return { text: dizin, command: "gir", dizin: dizin };
};

const cik = (action) => {
  action == "okuma" && (dizin = "okuma");
  action == "yazma" && (dizin = "yazma");
  action == "izleme" && (dizin = "izleme");
  action == "dinleme" && (dizin = "dinleme");
  action == "oyun" && (dizin = "oyun");
  action == "yönetim" && (dizin = "yönetim");
  action == "seçenekler" && (dizin = "seçenekler");
  action == "görevyöneticisi" && (dizin = "görev yöneticisi");
  action == "hesapmakinesi" && (dizin = "hesap makinesi");
  action == "çizim" && (dizin = "çizim");
  action == "notlar" && (dizin = "notlar");
  action == "terminal" && (dizin = "terminal");

  return { text: dizin, command: "çık", dizin: dizin };
};

const hata = () => {
  const text = `
Hata: Komut Bulunamadı`;
  return { text: text, command: "hata" };
};
const kapat = () =>{
  dizin = "kapat"
  return { text: dizin, command: "kapat", dizin: dizin };
}

export const getCommands = (name, action) => {
  const commands = {
    yardım: yardim(),
    hakkında: hakkinda(),
    dizinler: dizinler(dizin),
    gir: gir(action),
    çık: cik(action),
    kapat: kapat(),
    hata: hata()
  };
  return typeof commands[name] === "undefined"
    ? commands["hata"]
    : commands[name];
};
