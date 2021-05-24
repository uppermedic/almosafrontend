import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import { i18n } from 'root/i18n';

const index = () => {
  const { language } = i18n;
  const data = [
    {
      id: 1,
      en: {
        title: `Our Infection control director explains the reasons behind
              the new temporary guidelines:`,
        content: [
          {
            id: 1,
            question: `Why I can't visit my friends and relatives now?`,
            answer: `COVID-19 / Coronavirus is a highly contagious viral disease that has a high capacity to spread compared to other viruses. At certain times. The disease can be dangerous for both chronically ill patients and those who are immunocompromised. Moreover, some patients may not have symptoms, which may lead to the disease spreading in hospital.<br/>            
            We restricted hospital admission to patients only. The aim of this practice was to provide a safer environment for our patients and our caregivers, and to ensure that we maintain personal protective equipment for hospital staff who care for those you care for.<br/>`
          },
          {
            id: 2,
            question: `How can I support the person I care for?`,
            answer: `We encourage you to make virtual phone calls and visits with your loved ones. We have dedicated social workers who will contact you daily to update you about the health status of your loved ones and direct you to the doctor in charge to ask all your questions and arrange for your virtual visit; you can meet with your family and have a video call with the patient to make him feel at home. Please call this number 0552952660 to facilitate your visit.`
          },
          {
            id: 3,
            question: `How long will this visitor policy last?`,
            answer: `So far, there are no expectations about how long we will implement this new policy but we are following all local and international regulations, so we must wait and monitor how the virus progresses before we can make any changes.<br/>
            On behalf of the Executive Committee of Al-Moosa Specialist Hospital, we thank you for your understanding of the current laws. We hope that you are always in good health!            `
          }
        ]
      },
      ar: {
        title: ` أسباب هذه القرارات يشرحها مدير قسم مكافحة العدوى أدناه:<br/>
        الإرشادات المؤقتة الجديدة المتعلقة بالزيارات أثناء جائحة كورونا:
        `,
        content: [
          {
            id: 1,
            question: ` لماذا لا يمكنني زيارة أحبائي الآن؟`,
            answer: ` COVID-19 كورونا هو مرض فيروسي شديد العدوى لديه قدرة عالية على الانتشار مقارنة بالفيروسات الأخرى. في أوقات معينة، يمكن أن يكون المرض خطيرًا على المرضى المصابين بأمراض مزمنة وأولئك الذين يعانون من ضعف المناعة. علاوة على ذلك، يمكن ألا تظهر الأعراض على بعض المرضى، مما قد يؤدي إلى انتشار المرض داخل المستشفى.<br/>
            عندما قمنا بتقييد دخول المستشفى للمرضى فقط، كان الهدف من هذه الممارسة هو توفير بيئة أكثر أمانًا لمرضانا ومقدمي الرعاية لدينا، وللتأكد من أننا نحتفظ بمعدات الحماية الشخصية لموظفي المستشفى المُكرسين للعناية بـأحبائكم.`
          },
          {
            id: 2,
            question: `كيف يمكنني دعم فرد عائلتي؟`,
            answer: `نحن نشجعك على إجراء اتصالات هاتفية وزيارات افتراضية مع من تحب. لقد خصصنا أخصائيين اجتماعيين سيتصلون بك يوميًا لاطلاعك على الوضع الصحي لأحبائك وتوجيهك للطبيب المسؤول لطرح جميع أسئلتك والترتيب لزيارتك الافتراضية؛ يمكنك الاجتماع مع عائلتك وحضور مكالمة فيديو مع المريض ليشعر وكأنه في المنزل. يرجى الاتصال على هذا الرقم 0552952660 لتسهيل زيارتك.`
          },
          {
            id: 3,
            question: `إلى متى ستستمر سياسة الزائر بهذا الشكل؟`,
            answer: `حتى الآن، لا توجد توقعات بشأن المدة التي سنقوم فيها بتطبيق هذه السياسة الجديدة ولكننا نتبع جميع اللوائح المحلية والدولية، لذلك يجب علينا الانتظار ومراقبة كيفية تقدم الفيروس قبل أن نتمكن من إجراء أي تغييرات. <br/> 
            نيابة عن اللجنة التنفيذية بمستشفى الموسى التخصصي نشكرك على تفهمك.`
          }
        ]
      }
    },
    {
      id: 2,
      en: {
        title: `Visitor, Family and Care Partner Guidelines for ASH`,
        content: [
          {
            id: 1,
            question: null,
            answer: `To protect ASH patients as well our caregivers, we are obliged to restrict visitations except in specific situations. Kindly note that all the below exceptions are required prior approval. Please feel free to discuss your conditions with the treating physician or the assigned social worker:
          `
          },
          {
            id: 2,
            question: `For the adult inpatient`,
            answer: `You may discuss with the medical team the physical visitation option or care partner program if your beloved one does not have COVID-19 infection and has one of the following indications:
          <ul>
            <li>Has a disability that requires care from a family member.</li>
            <li>If he undergoes emergency surgery related to a traumatic event.</li>
            <li>Cases of birth.</li>
            <li>If the patient care, team requests the visitor to be part of a scheduled family training for patients in rehabilitation or to help with cognitive needs.</li>
            <li>To provide exit directions to the patient when personal education is required.</li>
            <li>Palliative care section and critical situations: each visitor is allowed every time. Other family members will have to stay outside the facility to take turns in special circumstances.</li>
          </ul>`
          }
        ]
      },
      ar: {
        title: `إرشادات الزائر والأسرة وشريك الرعاية بمستشفى الموسى التخصصي:`,
        content: [
          {
            id: 1,
            question: null,
            answer: `لحماية مرضانا وكذلك مقدمي الرعاية، نحن ملزمون بتقييد الزيارات إلا في حالات محددة. يرجى ملاحظة أن جميع الاستثناءات الواردة أدناه مطلوبة للحصول على موافقة مسبقة. لا تتردد في مناقشة حالتك مع الطبيب المعالج أو الأخصائي الاجتماعي:`
          },
          {
            id: 2,
            question: `للمرضى الداخليين البالغين:`,
            answer: `يمكنك مناقشة خيار الزيارة في المستشفى أو برنامج شركاء الرعاية مع الفريق الطبي إذا لم يكن المريض مصابًا بالكورونا \ COVID-19 ولديه أحد المؤشرات التالية:<br/>
          <ul>
            <li>  لديه إعاقة تتطلب رعاية من أحد أفراد الأسرة. </li>
            <li>  إذا خضع لعملية جراحية طارئة تتعلق بحدث صادم. </li>
            <li>   حالات الولادة.</li>
            <li>  إذا طلب فريق رعاية المريض من الزائر أن يكون جزءًا من تدريب عائلي مجدول للمرضى الذين يعانون من إعادة التأهيل أو للمساعدة في الاحتياجات المعرفية.</li>
            <li>  توفير توجيهات الخروج للمريض عندما يكون التثقيف الشخصي مطلوبًا.</li>
            <li>   رعاية نهاية العمر: يسمح لكل زائر في كل مرة. سيتعين على أفراد الأسرة الآخرين البقاء خارج المنشأة للتناوب في ظروف خاصة.</li>
          </ul>`
          }
        ]
      }
    },
    {
      id: 3,
      en: {
        title: `Visitor, Family and Care Partner Guidelines for ASH`,
        content: [
          {
            id: 1,
            question: `For patients suspected of having Covid-19:`,
            answer: `Unfortunately, visitors will not be permitted to enter until their laboratory results are available.`
          },
          {
            id: 2,
            question: `As for patients who have been confirmed to be infected with the Covid-19 virus:`,
            answer: `They are not allowed to visit until recovery and according to the conditions above.`
          },
          {
            id: 2,
            question: `For patients infected with Covid-19 inside the ICU:`,
            answer: ` We can allow a visitor to see his conscious patients from behind the glass window after providing the appropriate education; the social worker must arrange the visit, as it is forbidden to have more than one visitor at the same time in the ICU. The patient's family will be advised by calling this number 0552952660 to arrange a virtual visit.`
          }
        ]
      },
      ar: {
        title: `إرشادات الزائر والأسرة وشريك الرعاية بمستشفى الموسى التخصصي:`,
        content: [
          {
            id: 1,
            question: `بالنسبة للمرضى المشتبه في إصابتهم بـ Covid-19:`,
            answer: `للأسف لن يُسمح بدخول الزوار حتى تتوفر نتائج فحوصاتهم المخبرية`
          },
          {
            id: 2,
            question: `أما بالنسبة للمرضى الذين تأكدت إصابتهم بفيروس Covid-19:`,
            answer: `لا يُسمح بزيارتهم حتى التعافي ووفق الشروط أعلاه`
          },
          {
            id: 2,
            question: `للمرضى المصابين بفيروس Covid-19 داخل وحدة العناية المركزة:`,
            answer: `يمكننا السماح لأحد الزائرين برؤية مرضاه الواعين من خلف النافذة الزجاجية بعد توفير التعليم المناسب؛ يجب أن يتم ترتيب الزيارة من قبل الأخصائي الاجتماعي حيث يُمنع تواجد أكثر من زائر في وقت واحد داخل وحدة العناية المركزة. سيتم إبلاغ أسرة المريض بالاتصال على هذا الرقم 0552952660 لترتيب الزيارة الافتراضية. `
          }
        ]
      }
    },
    {
      id: 4,
      en: {
        title: `Pediatric inpatient:`,
        content: [
          {
            id: 1,
            question: `Non-COVID-19 Patients -:`,
            answer: ` It is permitted to accompany the patient throughout the hospitalization period. Only one visitor is permitted to visit at a time. Due to safety and infection control standards, we require parents to appoint a single guardian / companion unless necessary and they need to notify the Head Nurse.`
          },
          {
            id: 2,
            question: `Prospective and Confirmed COVID-19 Patients -:`,
            answer: ` Only one person identified with pediatric patients will be allowed to be hospitalized with the potential for COVID-19 infection; this person (legal guardian) must remain isolated with the patient in his room.
            <ul>
              <li>The infection control department must approve all pediatric inpatient visitors outside of these guidelines.</li>
              <li>All visitors must follow safety precautions.</li>
              <li>All visitors will be examined to ensure that there are no respiratory symptoms such as fever, cough, headache, and body aches, and if any symptoms appear, the visitor will not be able to stay, unfortunately.</li>
              <li>Please adhere to "face masks" when entering the hospital, and they will be provided to you by our staff in the examination offices before entering the hospital.</li>
            </ul>
            `
          }
        ]
      },
      ar: {
        title: `مرضى التنويم وأقسام المبيت:`,
        content: [
          {
            id: 1,
            question: `المرضى غير المصابين بـ COVID-19 –: `,
            answer: ` يُسمح بمرافقة المريض طوال فترة الاستشفاء. يُسمح بـزيارة زائر واحد فقط في كل مرة. نظرًا لمعايير السلامة ومكافحة العدوى، نطلب من الآباء تعيين وصي / مرافق واحد ما لم يكن ذلك ضروريًا ويحتاجون إلى إخطار الممرضة الرئيسية`
          },
          {
            id: 2,
            question: `مرضى COVID-19 المحتملين والمؤكدين :–`,
            answer: ` سيتم السماح لشخص واحد فقط تم تحديده مع المرضى من الأطفال في المستشفى مع احتمال الإصابة بـ COVID-19؛ يجب أن يبقى هذا الشخص (الوصي القانوني) معزولاً مع المريض في غرفته.
            <ul>
              <li>يجب اعتماد جميع زوار المرضى الداخليين من الأطفال خارج هذه الإرشادات من قبل قسم مكافحة العدوى.</li>
              <li>يجب على جميع الزوار اتباع احتياطات السلامة. </li>
              <li>سيتم فحص جميع الزوار للتأكد من عدم وجود أعراض تنفسية مثل الحمى والسعال والصداع وآلام الجسم وإذا ظهرت أي أعراض فلن يتمكن الزائر من البقاء. </li>
              <li>يرجى الالتزام بأقنعة الوجه” الكمامة” عند الدخول إلى المستشفى، وسيتم تقديمها لك من قبل موظفينا في مكاتب الفحص قبل دخول المستشفى.</li>
            </ul>`
          }
        ]
      }
    }
  ];
  return (
    <section className="covid-section">
      <Container>
        <Row>
          {data.map(item => (
            <Col md={6}>
              <Card item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default index;
