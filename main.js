
// Skills Data
const skillIntellect = [{
    skillName:'Creatividad',
    percent: 100
},{
    skillName:'Trabajo en equipo',
    percent: 96
},{
    skillName:'Comunicacion',
    percent: 95
},{
    skillName:'Facilidad de aprendizaje',
    percent: 89
},]

  //Regular expressions 
  const expressions = {
	nameAndSubject: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	subject: /^[a-zA-ZÀ-ÿ\s0-9]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

// burguer-mnu Icon
const sideNavIcon = document.querySelector('#closeHeaderIcon');
// header
const header =  document.querySelector('#header');
// Nav-Bar
const navBarAnchors = document.querySelectorAll('.nav-bar__anchor');
// Intellect list
const ulIntellect = document.getElementById('ulIntellect'); 
// Physical Fitness list
const ulPhysicalFit = document.getElementById('ulPhysicalFit'); 
// Combat Prowess list
const ulCombatPro = document.getElementById('ulCombatPro'); 
// image gallery
const imgGallery = document.getElementById('gallery'); 
// modal window
const modalWindow = document.getElementById('modalWindow');
const modalWindowImg  = document.getElementById('modalWindowImg');
const modalWindowText = document.getElementById('modalWindowText');
const modalWindowTitle = document.getElementById('modalWindowTitle');
const modalWindowCloseMark = document.getElementById('modalWindowCloseMark');
//contact elements
const contactBtn = document.getElementById('btnContact');
const contactContainer = document.getElementById('contact');
const formCloseMark = document.getElementById('formCloseMark');
const contactForm = document.querySelector('#contactForm');
//skill list fragment
const docFragment = document.createDocumentFragment();
// img gallery fragment
const docFragment2 = document.createDocumentFragment();
// form
const inputs = document.querySelectorAll('#contactForm input, textarea');
// scroll-Efect  Elements
const elementList = document.querySelectorAll('.observer');
// section identifier
const sectionIdentifier = document.querySelectorAll('.sectionObserver');

const fields = {
    name:false,
    email:false,
    subject :false,
    text:false
}

// "https://github.com/mattboldt/typed.js/" library documentation
const typed = new Typed('.typed',{
    strings: [
        'Argentina Programa 4.0',
        '#YoProgramo' ,
        ],
        typeSpeed: 75,
        startDelay: 300,
        backSpeed: 75,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        shuffle: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',
});

// procedure to make dinamics skill list
const dinamicUnorderedList = (skillList, listId)=>{
    skillList.forEach(value =>{
        
        const li = document.createElement('li');
        const div = document.createElement('div'); //this div is to make the skill bar
        const percentContainer = document.createElement('div');
        const container = document.createElement('div');
        const span = document.createElement('span');
    
        li.className= 'skills__li';
        div.className= 'skills__skill-bar';
        span.className= 'skills__span';
        container.className= 'skills__name-percent';
        div.style.width = `${value.percent}%`;
        percentContainer.textContent=`${value.percent}%`;
        span.textContent = value.skillName;
        container.appendChild(span);
        container.appendChild(percentContainer);
        li.appendChild(container);
        li.appendChild(div);
        docFragment.appendChild(li);
    })
    listId.appendChild(docFragment)
}

// procedure to make a dinamic gallery
const dinamicImgGalery = (imgList,listId) =>{
    imgList.forEach((imgData,i) =>{

        const div = document.createElement('div');
        const h2 =  document.createElement('h2');
        const img =  document.createElement('img');
    
        div.className = 'gallery__item';
        img.className = 'gallery__img';
        h2.className = 'gallery__img-title';
    
        h2.textContent = imgData.imgTitle;
        img.setAttribute('id',`img${i}` )
        img.setAttribute('src', `${imgData.imgSrc}`);
        img.setAttribute('alt', `${imgData.imgTitle}`);
        div.appendChild(img);
        div.appendChild(h2);
        docFragment2.appendChild(div)  ;  
    
    })
    listId.appendChild(docFragment2)
}

// procedure to show the modal-window changing adding a class
const modalWindowToggle = (element)=>{
    element.classList.toggle('pop-up__active')
}

// function to return the data of the selected image
const imageData = (imgList,imgSelected,imgData)=>{
    let index;
    imgList.forEach((data,i) =>{
        if(data.id === imgSelected){
           index = i;
        }
    })
    return imgData[index];
}

//form validation
const formValidation = (e)=>{
    const field = e.target.name;
    
    switch (field){
        case 'name':
            formValidationClasses(field,expressions.nameAndSubject.test(e.target.value))
            break;    
        case 'email':
            formValidationClasses(field,expressions.email.test(e.target.value))
            break;    
        case 'subject':
            formValidationClasses(field,expressions.subject.test(e.target.value))
            break;    
        case 'text':
            let isValid = false;
            if(e.target.value){isValid = true;}
            formValidationClasses(field,isValid)
            break;    
        }
}

const formValidationClasses = (field, isValid)=>{

    if(isValid){
        document.querySelector(`#${field}Group .contact__item-title` ).classList.add('contact__form-item-correct');
        document.querySelector(`#${field}Group .contact__item-title` ).classList.remove('contact__form-item-incorrect');
        document.querySelector(`#${field}Group .contact__validator-txt` ).classList.remove('contact__validator-txt-active');
        fields[field] = true;
    }else{
        document.querySelector(`#${field}Group .contact__item-title` ).classList.add('contact__form-item-incorrect');
        document.querySelector(`#${field}Group .contact__item-title` ).classList.remove('contact__form-item-correct');
        document.querySelector(`#${field}Group .contact__validator-txt` ).classList.add('contact__validator-txt-active');
        fields[field] = false;
    }
}

// procedure to open and close the side-bar

const headerToggleClass = ()=>{
    header.classList.toggle('header--show')
}

const closeMarkideClassToggle = ()=>{
    sieNavIcon.classList.toggle('ide-burger-icon');
}

// scroll efect block

const scrollEfect = (entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('in-position');
            elementObserver.unobserve(entry.target);
        }
    })
}

const elementObserver = new IntersectionObserver(scrollEfect,{
    root:null,
    rootMargin: '0px',
    threshold: 0.4
});

elementList.forEach(value =>{
    elementObserver.observe(value)
})

    // scroll efect for gallery only
        const galleryObserver = new IntersectionObserver(scrollEfect,{
            root:null,
            rootMargin: '0px',
            threshold: 0.1
        });

        galleryObserver.observe(imgGallery);
    // ------
        
    // the next block is for turn on the icon and the name of the section that the user is currently on
        const turnOnSection = (entries)=>{
            entries.forEach((entry)=>{
                const identifier = (entry.target.id);

                const sectionIcon = document.querySelector(`#${identifier}Icon`);
                const sectionName = document.querySelector(`#${identifier}Name`);
                if(entry.isIntersecting){
                    sectionIcon .classList.add('icon-section-selected');
                    sectionName.classList.add('name-section-selected');
                }else{
                    sectionIcon .classList.remove('icon-section-selected');
                    sectionName.classList.remove('name-section-selected');
                }
            })
        }

        const sectionObserver = new IntersectionObserver(turnOnSection,{ rootMargin:'-50% 0px -50% 0px'});

        sectionIdentifier.forEach(section =>{
            sectionObserver.observe(section)
        })

    // ----------

// scroll efect block ends

// EVENT LISTENERS

// open-menu click 
sideNavIcon.addEventListener('click',()=>{ 
    headerToggleClass();
})
modalWindowCloseMark.addEventListener('click',()=>{
    modalWindowToggle(modalWindow);
    closeMarkHideClassToggle()
});
//open and close the contact form 
contactBtn.addEventListener('click',()=>{  
    modalWindowToggle(contactContainer); 
    headerToggleClass();
} );
formCloseMark.addEventListener('click',()=>{
    modalWindowToggle(contactContainer);
    document.querySelectorAll('.contact__form-item-correct , .contact__validator-txt-active, .contact__form-item-incorrect').forEach((element)=>{
        element.classList.remove('contact__form-item-correct');
        element.classList.remove('contact__validator-txt-active');
        element.classList.remove('contact__form-item-incorrect');
        document.querySelector('#contactUnsuccessfully').classList.remove('contact__unsuccessfully')
        document.querySelector('#contactSuccessfully').classList.remove('contact__successfully')
    });
    contactForm.reset();
    });

// form

contactForm.addEventListener('submit',handleform )

async function  handleform (event){
    event.preventDefault();
    if( fields.name && fields.subject && fields.email && fields.text ){
        const form = new FormData(this)

        const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
        if(response.ok){
            document.querySelectorAll('.contact__form-item-correct').forEach((element)=>{
               
                element.classList.remove('contact__form-item-correct');
            })
            document.querySelector('#contactUnsuccessfully').classList.remove('contact__unsuccessfully')
            document.querySelector('#contactSuccessfully').classList.add('contact__successfully')
            setTimeout(()=>{
                document.querySelector('#contactSuccessfully').classList.remove('contact__successfully')
            },3000)
            contactForm.reset();
        }else{
            alert('no funca')
        }
       
    }else{
       document.querySelector('#contactUnsuccessfully').classList.add('contact__unsuccessfully')
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{formValidation(e)})
    input.addEventListener('blur',(e)=>{formValidation(e)})
})

navBarAnchors.forEach((anchor)=>{
    anchor.addEventListener('click', ()=>{ headerToggleClass()} );
})

// skills 
dinamicUnorderedList(skillIntellect, ulIntellect);
dinamicUnorderedList(skillPhysicalFitness, ulPhysicalFit);
dinamicUnorderedList(skillCombatProwess, ulCombatPro);

// img 

dinamicImgGalery(imgData,imgGallery);
const images = document.querySelectorAll('.gallery__img')

images.forEach(img => {
    img.addEventListener('click',()=>{
    
        let data = imageData(images, img.id,imgData);
        modalWindowImg.setAttribute('src', `${data.imgSrc}`);  
        modalWindowImg.setAttribute('alt', `${data.imgTitle}`);  
        modalWindowText.textContent = data.imgDescription;
        modalWindowTitle.textContent = data.imgTitle;
        closeMarkHideClassToggle();
        modalWindowToggle(modalWindow);
    })
})
