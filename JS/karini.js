function hide_form1(){
    var form1=document.getElementById("f1");
    var form2=document.getElementById("f2");
    form1.style.display="none";
    form2.style.display="block";

}
function hide_form2(){
    var form1=document.getElementById("f1");
    var form2=document.getElementById("f2");
    form1.style.display="inline-block";
    form2.style.display= "none";
   
}
function confirmation(){
ch=document.getElementById("n1").value;
for(i=0;i<ch.length;i++){
    if(ch.charAt(i).toUpperCase()>'Z'||ch.charAt(i).toUpperCase()<'A'){
    alert("Le nom doit comporter seulement des lettres");
    return false;
    }
}
if(ch.length<=2){
    alert("Le nom doit avoir au minimum 3 lettres");
    return false;
}
ch=document.getElementById("p1").value;
for(i=0;i<ch.length;i++){
    if(ch.charAt(i).toUpperCase()>'Z'||ch.charAt(i).toUpperCase()<'A'){
        alert("Le prénom doit comporter seulement des lettres");
        return false;
    }
}
if(ch.length<=2){
    alert("Le prénom doit avoir au minimum 3 lettres");
    return false;
}
if (document.getElementById("mdp").value!=document.getElementById("cmdp").value){
    alert("Le mot de passe doit etre identique à la confirmation");
    return false;
}
ch=document.getElementById("mdp").value;
b=1;
for(i=0;i<ch.length;i++){
    if(ch.charAt(i)<='9' && ch.charAt(i)>='0'){
        b=0;
        break;
    }
}
if(b==1){
    alert("Le mot de passe doit avoir au moins un chiffre");
    return false;
}
b=1;
for(i=0;i<ch.length;i++){
    if(ch.charAt(i)<='z' && ch.charAt(i)>='a') {b=0;break;}
}
if(b==1){
    alert("Le mot de passe doit avoir au moins une lettre miniscule ");
    return false;
}
b=1;
for(i=0;i<ch.length;i++){
    if(ch.charAt(i)<='Z' && ch.charAt(i)>='A') {b=0;break;}
}
if(b==1){
    alert("Le mot de passe doit avoir au moins une lettre majuscule");
    return false;
}
b=1;
for(i=0;i<ch.length;i++){
 if((ch.charAt(i)<'0'|| ch.charAt(i)>'9')&&(ch.charAt(i).toUpperCase()<'A'|| ch.charAt(i).toUpperCase()>'Z') ){b=0;break;}
}
if(b==1){
    alert("Le mot de passe doit avoir au moins un caractère spécial");
    return false;
}
}

function ajouter(){
file=document.getElementById("ajouter_photo1");
img=document.getElementById("pdp");
file.addEventListener('change',function(){
    fichier_choisi=this.files[0];
    if(fichier_choisi){
        reader=new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        })
reader.readAsDataURL(fichier_choisi);
    }
})
}


