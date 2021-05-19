import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="privacy">
      <div className="head-banner">
        <div className="container">
          <h2>Privacy and Policy</h2>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="single-section">
            <Title title="Privacy-policy" />
            <Paragraph paragraph="Almoosa Specialist Hospital website puts the confidential information of its users and visitors at the top of the list of priorities, and its management makes every effort to provide valuable services to all its participants." />
            <Paragraph paragraph="All visitors and users of the website must become aware of the conditions and the principles that govern the privacy and confidential information in order to know and understand the mechanism of updating them although the website management is not obliged to declare of any amendments or changes related to these conditions or principles. Your use of the site will therefore mean your acceptance to all the conditions and to whatever changes or amendments here after." />
          </div>
          <div className="single-section">
            <Title title="The security of personal information" />
            <Menu
              items={[
                {
                  text:
                    'A document of privacy and confidential information has been prepared to help the visitors and the users of the website to fully understand the nature of the data collected from them when visiting the website and the way such data is dealt with.'
                },
                {
                  text:
                    'The management of the site takes all the appropriate actions and measures to maintain personal information and guarantees to protect them from loss or unauthorized access or misuse or modification or disclosure. Of the most important measures taken by the hospital to protect personal information:',
                  subItems: [
                    'Strict actions and appropriate measures to maintain the security of the information and the use of modern technology to ensure protection from fraud or unauthorized access to our systems.',
                    'Regular and periodic update of the procedures and protection measures that meet or exceed the standards.',
                    'Our staff are qualified and trained to respect the confidentiality of personal information for our visitors.'
                  ]
                }
              ]}
            />
          </div>
          <div className="single-section">
            <Title title="Collection of Personal Information" />
            <Menu
              items={[
                {
                  text:
                    'Once a user visits the website of the Almoosa Specialist Hospital, the company’s own server logs his IP address the Internet user’s IP, date and time of the visit and the URL of any web site it is referred to the website of the Almoosa Specialist Hospital.'
                },
                {
                  text:
                    'Most of the electronic websites Once visited they put a small file on the hard drive of the visitor (browser), and it is called “cookies”. These are text files, some sites deposit on the hard drive of the visitor’s computer. These text files contain information that would allow for the site that deposited it to retrieve it back when needed during the next visit of the user to the site and this information is saved and it contains:',
                  subItems: [
                    'The username and the password.',
                    'saving of the settings page, if available on the website.',
                    'saving of the colors that have been selected by the user.',
                    'The impossibility to vote more than once by the same user.'
                  ]
                },
                {
                  text:
                    'The browser (the user) does not have to enter the password on each visit the system will be able to detect the location through the cookies files, or may prevent the user from repeating the process of voting if he has already voted, and so on … On this basis, the website of the Almoosa Specialist Hospital will use the information in the cookie’s files for technical purposes of their own and when visiting more than once. It can also change the information contained within cookies or add new information whenever you visit the website of the Almoosa Specialist Hospital.'
                },
                {
                  text:
                    'If you use direct application or sent us an electronic email through the website of the Almoosa Specialist Hospital providing us with your personal data, we will share the necessary data with other bodies or other departments, to serve you more effectively. We will not share your personal data with any entity. By submitting your data and your personal information through the electronic website of the Almoosa Specialist Hospital, it means you fully agree to the storage, processing and use of such data by the Saudi authorities. We always reserve the right to disclose any information to the competent authorities, when it is necessary to satisfy any law, regulation or governmental request.'
                },
                {
                  text:
                    'You are fully responsible for your own correctness and sincerity of the data you send through this portal.'
                }
              ]}
            />
          </div>
          <div className="single-section">
            <Title title="Protecting your privacy" />
            <Menu
              items={[
                {
                  text:
                    'To help you protect your personal information, we recommend the following:',
                  subItems: [
                    'contact us immediately when you think that someone was able to get your password, or use the code, or PIN, or any other confidential information.',
                    'Do not give out confidential information over the phone or Internet unless you know the identity of the person or the partner who receives the information.',
                    'Use a secure browser when dealing with online transactions and closing down of all unused applications on the network, and make sure that the antivirus software updated at all times.',
                    'If you have any enquiries or opinions on the principles of privacy, you can communicate with the Department of the website through the following e-mail: webmaster@almoosahospital.com.sa'
                  ]
                },
                {
                  text:
                    'To keep your personal data, the electronic storage and the personal data sent will be secured by using the appropriate security technologies.'
                },
                {
                  text:
                    'This portal (website) may contain electronic links to sites or portals that may use different methods for protecting information and privacy not similar to what we use. We are not responsible for the contents, methods and characteristics of these other sites, and advise you to consult the privacy notices of those sites.'
                }
              ]}
            />
          </div>
          <div className="single-section">
            <Title title="Sending Electronic e-mails to our Organization" />
            <Paragraph paragraph="When you inquire or request information about a program or a specific service, or if you give additional information using whatever means of communication with the company , whether electronic or non-electronic, such as an inquiry on our site, we will use your email address to respond to your inquiry, as it is possible to save and keep your e-mail address and your message and our response will be for the purposes of quality control, and we may do so for legal and censorship purposes." />
            <Paragraph paragraph=" Almoosa Specialist Hospital may, from time to time, send you email regarding our programs and services. If at any time you wish to be removed from our mailing list you can reply as directed to any incoming email, or send an email to Unsubscribe@almoosahospital.com.sa " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

// small components
const Title = ({ title }) => {
  return <h3 className="privacy-title">{title}</h3>;
};

const Paragraph = ({ paragraph }) => {
  return <p className="privacy-paragraph">{paragraph}</p>;
};

const Menu = ({ items }) => {
  return (
    <ul className="privacy-menu">
      {items.map((item, index) => {
        return (
          <li>
            {item.text}
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, index) => {
                  return <li className="sub-item">{subItem}</li>;
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

/* */
