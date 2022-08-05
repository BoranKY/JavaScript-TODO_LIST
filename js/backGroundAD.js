//Başlık kısmının arkaplan rengi ile text hizalaması ayarlandı, padding ayarlanması yapıldı
let headerColor=document.getElementById("header")
headerColor.style.backgroundColor='orange'
headerColor.style.textAlign="center"
headerColor.style.padding="20px"

// Başlık kısmındaki h2 bilgisinin içerisinde yazan yazının rengi değiştirildi
let baslik=document.getElementById("headerBaşlık")
baslik.style.color='white'

//Başlık kısmının içerisindeki resim kısmının arkaplan rengi değiştirildi
let resim=document.getElementById("resim")
resim.style.backgroundColor='white'

// Başlık kısmının içerisindeki arama çubuğunun genişiği değiştirildi
let aramacubugu=document.getElementById("task")
aramacubugu.style.width="700px"

// Başlık kısmının içerisindeki arama çubuğundaki butonun genişiği ve arkaplan rengi değiştirildi
let aramaKısmıButonu=document.getElementById("liveToastBtn")
aramaKısmıButonu.style.backgroundColor='lightgrey'
aramaKısmıButonu.style.color='grey'
/*aramaKısmıButonu.style.width="100px" UYARI ARAMA ÇUBUĞUNDAKİ BUTONUN GENİŞLİĞİ AYARLANAMADI*/



//----------------------------STYLE KISIM BİTİŞ NOKTASI-------------------------------------------------------------------------------------------



// Listenin içerisindeki daha önceden girilmiş olan 5 listeye class eklenmesi yapıldı
let exLiDOM1=document.querySelector("#exls1")
exLiDOM1.classList.add("list-group-item")
let exLiDOM2=document.querySelector("#exls2")
exLiDOM2.classList.add("list-group-item")
let exLiDOM3=document.querySelector("#exls3")
exLiDOM3.classList.add("list-group-item")
let exLiDOM4=document.querySelector("#exls4")
exLiDOM4.classList.add("list-group-item")
let exLiDOM5=document.querySelector("#exls5")
exLiDOM5.classList.add("list-group-item")

// Arama çubuğuna bilgiler girildikten sonra spesifik bir class özelliği taşıyan yeni liste ögeleri oluşturuluyor.
let inputDOM=document.querySelector("#task")
inputDOM.addEventListener("onclick",newElement)

let listDOM = document.querySelector("#list")
let ullength = document.getElementsByTagName("li")

for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    ullength[i].append(closeButton); // closeButton değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    ullength[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}

function check(){
    this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
  }

function newElement(){
    let ulDOM = document.getElementById("list");
    let candidate = document.getElementById("task");
    let liDOM = document.createElement("li");

    if (candidate.value == "")  {  // input değeri boş girildiğinde ve girilmediğinde 
      $(".error").toast("show"); //error clasını kullanarak 
    } else {
      $(".success").toast("show");
  
    liDOM.classList.add("list-group-item")
    liDOM.setAttribute('id', candidate.value);
    liDOM.appendChild(document.createTextNode(candidate.value));
    ulDOM.appendChild(liDOM);
    liDOM.onclick = check;
    localStorage.setItem('todo',JSON.stringify(candidate.value))
    
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
        
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");
    
}

}



function removeButton(){
    this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
    localStorage.removeItem('todo')
  }









