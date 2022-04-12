let arr = Array(121),x=20,y=20,n=0;
let letters={0:'',1:'A',2:'B',3:'C',4:'D',5:'E',6:'F',7:'G',8:'H',9:'I',10:'J'}
for(let i=0;i<arr.length;i++){
    if(i<=10){
        arr[i]={isActive:false,letter:letters[i],posX:x,posY:y,id:i,bgColor:''}
    }
    else if(i!==0&&i%11===0) {
        y+=20;
        x=20;
        n=i%10
        if(i===110) n=10
        arr[i]={isActive:false,num:n,posX:x,posY:y,id:i,bgColor:''}
        x+=20
    }
    else{
    arr[i]={isActive:false,letter:'',num:'',posX:x,posY:y,id:i,bgColor:''}
    x+=20
    }
}
export default arr