const form = document.querySelector('.form-question')
let tabResultats = [];
const reponses = ['c' , 'a' , 'b' , 'a' , 'c'];
const titreResultat = document.querySelector('.resultat h2')
const NoteResultat = document.querySelector('.note')
const AideResultat = document.querySelector('.aide')
const ToutesLesQuestions = document.querySelectorAll('.question-block')
let tabSolution = [];
const emojis = [];


form.addEventListener('submit' , (e)=>{

        e.preventDefault();

    
    for(let i=1 ; i<6 ; i++)
    {
        tabResultats.push(document.querySelector(`.question-block input[name="q${i}"]:checked`).value)
    }

    verifFunction(tabResultats)
     
    tabResultats = [] ;

})

 function verifFunction(tabResultats){

       for(let j=0 ; j<5 ; j++)
       {

            if(tabResultats[j] === reponses[j])
            {
                tabSolution.push(true);
            }
            else
            {
                tabSolution.push(false)
            }

       }

    //    console.log(tabSolution);
       afficherResultat(tabSolution);
       couleursFucntion(tabSolution)

        tabSolution = [] ;

        
 }

 function afficherResultat(tabCheck)
 {
       const nbFautes = tabCheck.filter(el => el !== true).length

       switch(nbFautes)
       {
           case 0 :
                    titreResultat.innerText = 'Bravo c\'est un sans fautes';
                    AideResultat.innerText = ''
                    NoteResultat.innerText = '5/5'
                    break ;
           case 1 :  
                    titreResultat.innerText =' vous y etes presque !' 
                    AideResultat.innerText = 'Retentez une autre reponse dans la case rouge plus re-validez !' 
                    NoteResultat.innerText = '4/5' 
                    break ;

           case 2 :  
                    titreResultat.innerText =' Encore un Effort ! '
                    AideResultat.innerText = ' Retentez une reponse dans les cases rouge puis re-validez '
                    NoteResultat.innerText ='3/5'
                    break ;

          case 3 :  
                    titreResultat.innerText =' il reste quelques erreurs '
                    AideResultat.innerText = 'Retentez une autre reponse dans les cases Rouges  puis Re-validez'
                    NoteResultat.innerText ='2/5'
                    break ;

          case 4 :  
                   titreResultat.innerText =' peux mieux faire !  '
                   AideResultat.innerText ='Retentez une autre reponse dans les cases rouges puis re-valiez '
                   NoteResultat.innerText ='1/5' 
                   break ;
        
          case 5 :  
                    titreResultat.innerText =  ' peux mieux faire ! '
                    AideResultat.innerText = ' Retentez une autre reponse dans les cases rouges puis re-valiez'
                    NoteResultat.innerText = '0/5'
                    break ;

        default  :
                    'oop , cas  inatendu'
       }
                
}

function couleursFucntion(tabValBool)
{
      
      for(let a = 0 ; a<tabValBool.length ; a++)
      {
          if(tabValBool[a] === true)
          {
             ToutesLesQuestions[a].style.background = 'lightgreen'

          }
          else
          {
             ToutesLesQuestions[a].style.background = '#ffb8b8'
             ToutesLesQuestions[a].classList.add('echec')

             setTimeout( () => {

                        ToutesLesQuestions[a].classList.remove('echec')
             } , 500 )
          }
      } 
}

ToutesLesQuestions.forEach( item => {

       item.addEventListener('click' , ()=>{

           item.style.background = 'white'
       }) 
})