import './style.css';
import { openImagePicker } from './ utils/editImage.js';
import { experienceList } from './components/ExperienceList/ExperienceList.js';
import { toolsList } from './components/ToolsList/ToolsList.js';
import { educationsList } from './components/EducationsList/EducationsList.js';
import { interestsList } from './components/InterestsList/InterestsList.js';
import { contactInfoList } from './components/ContactInfoList/ContactInfoList.js';
import { createEditableInput } from './ utils/editableInput.js';
import { exportHTMLtoPDF } from './ utils/exportHTMLtoPDF.js';
import { createRipple } from './ utils/rippleEffect.js';

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#app').innerHTML = `
        <div>
            <div class="container">
                <div class="header-container">
                    <div id="imageContainer" class="avatar square header__avatar item-block"></div>
                    <div class="square header__my-info item-block">
                        <div data-id="1" class="editable-text header__greeting">Hello 👋🏻 I’m</div>
                        <div class="my-info__details">
                            <div data-id="2" class="editable-text my-info__title">Pleshkov Bogdan</div>
                            <div data-id="3" class="editable-text my-info__subtitle">FullStack Developer</div>
                        </div>
                    </div>
                    <div class="languages header__languages item-block">
                        <div data-id="4" class="editable-text title_text">
                            Languages
                        </div>
                        <div class="languages__skills">                 
                            <div data-id="5" class="editable-text languages__language">Russian</div>
                            <div class="adjustable-bar languages__bar languages__bar--1"></div> 
                            <div data-id="6" class="editable-text languages__language">English</div>
                            <div class="adjustable-bar languages__bar languages__bar--2"></div>  
                            <div data-id="7" class="editable-text languages__language">Japanese</div>
                            <div class="adjustable-bar languages__bar languages__bar--3"></div>
                        </div>
                    </div>
                </div>
                <div class="body-container">
                    <div class="body-container__upper">
                        <div class="experience item-block">
                            <div data-id="8" class="editable-text title_text">
                                Experience
                            </div>
                            <div class="experience-list">
                            </div>
                        </div>
                        <div class="tools item-block">
                            <div data-id="9" class="editable-text title_text">
                                Tools
                            </div>
                            <div class="tools-list">
                            </div>
                        </div>
                    </div>
                    <div class="body-container__lower">
                        <div class="education item-block">
                            <div data-id="10" class="editable-text title_text">
                                Education
                            </div>
                            <div class="educations__list">
                            </div>
                        </div>
                        <div class="body-container__lower-right">
                            <div class="interests item-block">
                                <div data-id="11" class="editable-text title_text">
                                    Interests
                                </div>
                                <div class="interests__list">
                                </div>
                            </div>
                            <div class="сontact-info item-block">
                                <div data-id="12" class="editable-text title_text">
                                    Let´s chat! I´m ready to work on excinting projects
                                </div>
                                <div class="сontact-info__list">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button id="exportButton" class="export-button" type="button">Export to PDF</button>
        </div>  
        `;

	document
		.getElementById('exportButton')
		.addEventListener('click', function (event) {
			exportHTMLtoPDF(document.querySelector('.container'));
			createRipple(event);
		});

	experienceList(document.querySelector('.experience-list'));
	toolsList(document.querySelector('.tools-list'));
	educationsList(document.querySelector('.educations__list'));
	interestsList(document.querySelector('.interests__list'));
	contactInfoList(document.querySelector('.сontact-info__list'));
	createEditableInput(document.querySelectorAll('.editable-text'));

	const imageContainer = document.getElementById('imageContainer');
	imageContainer.addEventListener('click', openImagePicker);
});
