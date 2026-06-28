/**
 * LASUSTECH Digital Infrastructure, Innovation & Ecosystem Transformation Initiative
 * Google Apps Script (.gs)
 * Creates a complete Google Form automatically
 *
 * Author: ChatGPT
 * Platform: Google Apps Script
 */

function createLASUSTECHSurveyForm() {

    // Create Form
    var form = FormApp.create(
      'LASUSTECH Digital Infrastructure, Innovation & Ecosystem Transformation Initiative Survey'
    );
  
    // Form Description
    form.setDescription(
      'This survey is designed to assess the current digital readiness, infrastructure capacity, cybersecurity maturity, smart learning environment, innovation ecosystem, governance systems, and Industry 4.0 readiness of LASUSTECH.\n\n' +
      'Aligned with:\n' +
      '- Nigeria’s Digital Economy Strategy\n' +
      '- Federal Ministry of Education modernization agenda\n' +
      '- UNESCO Digital Learning Framework\n' +
      '- Global Smart University transformation standards\n' +
      '- Industry 4.0 and AI readiness models\n' +
      '- International cybersecurity and governance standards.'
    );
  
    form.setCollectEmail(true);
    form.setProgressBar(true);
    form.setShuffleQuestions(false);
  
    // =========================
    // SECTION 1
    // =========================
  
    form.addSectionHeaderItem()
        .setTitle('SECTION 1 — RESPONDENT INFORMATION');
  
    form.addTextItem()
        .setTitle('Name (Optional)');
  
    form.addTextItem()
        .setTitle('Faculty/Department/Unit');
  
    form.addMultipleChoiceItem()
        .setTitle('Campus')
        .setChoices([
          form.createChoice('Main Campus'),
          form.createChoice('Ikorodu Campus'),
          form.createChoice('Other')
        ]);
  
    form.addMultipleChoiceItem()
        .setTitle('Category')
        .setChoices([
          form.createChoice('Student'),
          form.createChoice('Academic Staff'),
          form.createChoice('Non-Academic Staff'),
          form.createChoice('ICT Personnel'),
          form.createChoice('Management'),
          form.createChoice('External Stakeholder')
        ]);
  
    form.addMultipleChoiceItem()
        .setTitle('Years in LASUSTECH')
        .setChoices([
          form.createChoice('Less than 1 year'),
          form.createChoice('1–5 years'),
          form.createChoice('6–10 years'),
          form.createChoice('11–15 years'),
          form.createChoice('Above 15 years')
        ]);
  
    // =========================
    // HELPER FUNCTION
    // =========================
  
    function addYesNoQuestion(title) {
      form.addMultipleChoiceItem()
          .setTitle(title)
          .setChoices([
            form.createChoice('Yes'),
            form.createChoice('No')
          ]);
    }
  
    function addTrueFalseQuestion(title) {
      form.addMultipleChoiceItem()
          .setTitle(title)
          .setChoices([
            form.createChoice('True'),
            form.createChoice('False')
          ]);
    }
  
    // =========================
    // SECTION 2
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 2 — DIGITAL INFRASTRUCTURE & CONNECTIVITY ASSESSMENT');
  
    addYesNoQuestion('Is internet access available in your work/study area?');
    addYesNoQuestion('Is the campus internet reliable?');
    addYesNoQuestion('Do you experience frequent network downtime?');
    addYesNoQuestion('Is Wi-Fi coverage adequate in your area?');
    addYesNoQuestion('Does your department require improved internet connectivity?');
    addYesNoQuestion('Is there adequate access to digital devices for academic or administrative work?');
    addYesNoQuestion('Is the current network infrastructure sufficient for digital learning?');
  
    // =========================
    // SECTION 3
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 3 — SMART CLASSROOM & DIGITAL LEARNING READINESS');
  
    addYesNoQuestion('Are smart classroom technologies available in your faculty?');
    addYesNoQuestion('Are projectors and digital displays available in classrooms?');
    addYesNoQuestion('Are hybrid learning systems currently functional?');
    addYesNoQuestion('Do lecturers effectively use digital teaching tools?');
    addYesNoQuestion('Are students adequately engaged through digital learning platforms?');
    addYesNoQuestion('Does LASUSTECH require additional smart classrooms?');
    addYesNoQuestion('Should the university expand hybrid learning systems?');
  
    // =========================
    // SECTION 4
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 4 — DIGITAL GOVERNANCE & ADMINISTRATIVE SYSTEMS');
  
    addYesNoQuestion('Are most university processes digitized?');
    addYesNoQuestion('Are administrative workflows still paper-based?');
    addYesNoQuestion('Are digital approval systems available?');
    addYesNoQuestion('Is student registration fully digital?');
    addYesNoQuestion('Are ERP systems effectively supporting operations?');
    addYesNoQuestion('Does the university require workflow automation?');
    addYesNoQuestion('Are institutional digital governance policies available?');
  
    // =========================
    // SECTION 5
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 5 — CYBERSECURITY & DIGITAL TRUST ASSESSMENT');
  
    addYesNoQuestion('Are you aware of institutional cybersecurity policies?');
    addYesNoQuestion('Have you received cybersecurity awareness training?');
    addYesNoQuestion('Are institutional systems adequately protected?');
    addYesNoQuestion('Are secure passwords and access controls enforced?');
    addYesNoQuestion('Is multi-factor authentication implemented?');
    addYesNoQuestion('Does LASUSTECH require stronger cybersecurity systems?');
    addYesNoQuestion('Should the university establish a Security Operations Center (SOC)?');
  
    // =========================
    // SECTION 6
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 6 — AI, INDUSTRY 4.0 & EMERGING TECHNOLOGY READINESS');
  
    addYesNoQuestion('Are you familiar with Artificial Intelligence technologies?');
    addYesNoQuestion('Does your department currently use AI-enabled systems?');
    addYesNoQuestion('Should LASUSTECH establish AI laboratories?');
    addYesNoQuestion('Should the university establish robotics and automation labs?');
    addYesNoQuestion('Is Industry 4.0 readiness important for student employability?');
    addYesNoQuestion('Should emerging technologies be integrated into teaching and research?');
    addYesNoQuestion('Does LASUSTECH require more digital innovation centers?');
  
    // =========================
    // SECTION 7
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 7 — RESEARCH, INNOVATION & ENTREPRENEURSHIP ECOSYSTEM');
  
    addYesNoQuestion('Does LASUSTECH adequately support innovation and research?');
    addYesNoQuestion('Are innovation hubs required within the university?');
    addYesNoQuestion('Should the university establish startup incubation centers?');
    addYesNoQuestion('Are industry partnerships sufficient for research development?');
    addYesNoQuestion('Does the university require digital fabrication laboratories?');
    addYesNoQuestion('Should AI and cybersecurity research centers be prioritized?');
    addYesNoQuestion('Is additional funding required for research innovation?');
  
    // =========================
    // SECTION 8
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 8 — SMART CAMPUS & INTELLIGENT SYSTEMS');
  
    addYesNoQuestion('Should LASUSTECH deploy smart surveillance systems?');
    addYesNoQuestion('Should smart ID and digital access control systems be introduced?');
    addYesNoQuestion('Are IoT-enabled campus systems necessary?');
    addYesNoQuestion('Should smart energy management systems be implemented?');
    addYesNoQuestion('Is environmental monitoring important for campus sustainability?');
    addYesNoQuestion('Should campus operations be automated through smart systems?');
    addYesNoQuestion('Does the university require centralized monitoring systems?');
  
    // =========================
    // SECTION 9
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 9 — CAPACITY BUILDING & DIGITAL SKILLS DEVELOPMENT');
  
    addYesNoQuestion('Have you received formal digital skills training?');
    addYesNoQuestion('Do staff require additional ICT training?');
    addYesNoQuestion('Should faculty receive smart teaching certification programs?');
    addYesNoQuestion('Should ICT personnel receive cybersecurity certifications?');
    addYesNoQuestion('Is AI and digital literacy training necessary for students?');
    addYesNoQuestion('Should LASUSTECH establish continuous digital training programs?');
    addYesNoQuestion('Is institutional capacity building critical to transformation success?');
  
    // =========================
    // SECTION 10
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 10 — TRANSFORMATION PRIORITIES & STRATEGIC RECOMMENDATIONS');
  
    addYesNoQuestion('Should digital transformation be treated as a strategic institutional priority?');
    addYesNoQuestion('Does LASUSTECH require urgent infrastructure modernization?');
    addYesNoQuestion('Should the university prioritize smart campus development?');
    addYesNoQuestion('Should cybersecurity investment be increased?');
    addYesNoQuestion('Should AI and innovation ecosystems be expanded?');
    addYesNoQuestion('Is governance reform necessary for digital transformation success?');
    addYesNoQuestion('Should phased implementation be adopted for transformation execution?');
  
    // =========================
    // SECTION 11
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 11 — TRUE OR FALSE ASSESSMENT');
  
    addTrueFalseQuestion('LASUSTECH requires stronger digital infrastructure.');
    addTrueFalseQuestion('Smart classrooms improve teaching effectiveness.');
    addTrueFalseQuestion('Cybersecurity is critical to university operations.');
    addTrueFalseQuestion('AI and Industry 4.0 readiness are essential for future universities.');
    addTrueFalseQuestion('Digital governance improves institutional efficiency.');
    addTrueFalseQuestion('Capacity development is essential for sustainable transformation.');
    addTrueFalseQuestion('Smart campus systems improve operational efficiency.');
  
    // =========================
    // SECTION 12
    // =========================
  
    form.addPageBreakItem()
        .setTitle('SECTION 12 — GENERAL COMMENTS & RECOMMENDATIONS');
  
    form.addParagraphTextItem()
        .setTitle('Please provide any additional comments or recommendations.');
  
    // =========================
    // COMPLETION MESSAGE
    // =========================
  
    form.setConfirmationMessage(
      'Thank you for participating in the LASUSTECH Digital Infrastructure, Innovation & Ecosystem Transformation Initiative Survey.'
    );
  
    Logger.log('Form URL: ' + form.getPublishedUrl());
    Logger.log('Edit URL: ' + form.getEditUrl());
  }