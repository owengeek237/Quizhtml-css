const form = document.querySelector('.form-quizz');
let tableResultats = [];
const reponses = ['c', 'a' , 'b' , 'a' , 'c'];
const emojis = []
const titreResultat = document.querySelector('.resultat h2');
const NoteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const ToutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

 form.addEventListener('submit' , (e) => {

        e.preventDefault();

        // console.log(document.querySelector('input[name=q1]:checked').value);

        for(let i=1 ; i<6 ; i++)
        {
            tableResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);

        }

        // console.log(tableResultats);

        VerifFunc(tableResultats);
        tableResultats = [];

 })


function VerifFunc(tableResultats)
{
    for(let a =0 ; a<5 ; a++)
    {
        if(tableResultats[a]=== reponses[a])
        {
            verifTableau.push(true);
        }
        else{
              verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFucntion(verifTableau)
    
    verifTableau = [];
}
    

function afficherResultats(tabCheck) {

       const nbDeFautes = tabCheck.filter( el => el !== true).length

       switch(nbDeFautes)
       {
          case 0 :  
                    titreResultat.innerText =  '  Bravo , c\'est  un sans fautes '
                    aideResultat.innerText = '' 
                    NoteResultat.innerText = '5/5' 

                        break ;

          case 1 :  
                    titreResultat.innerText =' vous y etes presque !' 
                    aideResultat.innerText = 'Retentez une autre reponse dans la case rouge plus re-validez !' 
                    NoteResultat.innerText = '4/5' 
                            break ;


           case 2 :  
                    titreResultat.innerText =' Encore un Effort ! '
                     aideResultat.innerText = ' Retentez une reponse dans les cases rouge puis re-validez '
                     NoteResultat.innerText ='3/5'
                                break ;

          case 3 :  
                    titreResultat.innerText =' il reste quelques erreurs '
                    aideResultat.innerText = 'Retentez une autre reponse dans les cases Rouges  puis Re-validez'
                    NoteResultat.innerText ='2/5'
                                    break ;

          case 4 :  
                titreResultat.innerText =' peux mieux faire !  '
                 aideResultat.innerText ='Retentez une autre reponse dans les cases rouges puis re-valiez '
                 NoteResultat.innerText ='1/5' 
                                        break ;
                            
       

       case 5 :  
                    titreResultat.innerText =  ' peux mieux faire ! '
                    aideResultat.innerText = ' Retentez une autre reponse dans les cases rouges puis re-valiez'
                    NoteResultat.innerText = '0/5'
                    break ;

        default  :
                    'cas inatendu'
       }
   
        // console.log(nbDeFautes);
}


function couleursFucntion(tabValBool)
{
    for(let j=0 ; j<tabValBool.length ; j++ )
    {
          if(tabValBool[j] === true)
          {
               ToutesLesQuestions[j].style.background = 'lightgreen'
          }
          else
          {
                ToutesLesQuestions[j].style.background = '#ffb8b8'
                ToutesLesQuestions[j].classList.add('echec');

                setTimeout(() =>{
                   
                       ToutesLesQuestions[j].classList.remove('echec');

                } , 500)
          }
    }
}


ToutesLesQuestions.forEach( item => {
      
        item.addEventListener('click' , () => {

               item.style.background = 'white'
        })
})
