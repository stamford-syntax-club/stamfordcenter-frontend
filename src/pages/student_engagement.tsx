import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';


export default function StudentEngagementPage() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div style={{ margin: '0 10%'}}>
      <h1 style={{ textAlign: 'center' }}>STUDENT ENGAGEMENT</h1>

      <div>
        <h3 style={{ textAlign: 'left', fontSize: '1.2em' }}>WHAT ABOUT US</h3>
        <p>
          At Stamford International University, our Student Engagement Team is the heartbeat of the student experience. Committed to creating an environment where every student feels connected, inspired, and supported, our team is here to guide you through a transformative journey.
        </p>
        <p>
          <strong>Student Engagement Advisors:</strong> Your go-to mentors, these advisors are passionate about your success. From academic advice to personal development, they are here to ensure that you make the most out of your time at Stamford.
        </p>
        <p>
          <strong>Event Coordinators:</strong> The architects of unforgettable experiences, our event coordinators work tirelessly to bring you a calendar filled with exciting events, workshops, and activities. Get ready for a dynamic campus life that goes beyond textbooks!
        </p>
        <p>
          <strong>Club Facilitators:</strong> These individuals are the driving force behind our diverse range of clubs and societies. They provide guidance, resources, and a platform for you to explore and express your passions. Whatever your interest, there's a club waiting for you.
        </p>
        <p>
          <strong>Community Outreach Team:</strong> Committed to making a positive impact beyond our campus, this team spearheads community service initiatives, partnerships, and outreach programs. Join us in making a difference in the world.
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', marginTop: '10%'}} >OUR PAST ACTIVITIES</h2>



        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: '1', marginTop: '20px'}}>
            <Carousel withIndicators plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
                <Carousel.Slide><img src="/assets/images/activity/activity1_image1.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity1_image2.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity1_image3.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
            </Carousel>
          </div>
          <div style={{ flex: '1', marginRight: '20px'  }}>
            <h4>UG Orientation</h4>
            <p>
            On Friday, November 17th, 2023, UG Orientation was organized to welcome all new students. The event featured speeches from Dr. Apitep and Aj. Colin, along with an introduction from the program advisor. Additionally, the Student Council for Academic Year 2023 organized various activities to facilitate student interaction and help them get to know each other better.
            </p>
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <div style={{ flex: '1', marginTop: '20px'}}>
            <h4>STIU Talk</h4>
            <p>
            On Monday, September 11th, 2023, the Student Council Team Academic Year 2023 organized the STIU Talk (Term 1.2023) at Stamford International University, Rama IX Campus. The event received an amazing and warm welcome, and it was a complete success.
            </p>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
          <Carousel withIndicators plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image1.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image2.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image3.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image4.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image5.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity2_image6.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
            </Carousel>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <div style={{ flex: '1', marginTop: '20px'}}>
          <Carousel withIndicators plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
                <Carousel.Slide><img src="/assets/images/activity/activity3_image1.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity3_image2.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
                <Carousel.Slide><img src="/assets/images/activity/activity3_image3.png" style={{ width: '85%', borderRadius: '8px' }}/></Carousel.Slide>
            </Carousel>
          </div>
          <div style={{ flex: '1', marginRight: '20px'  }}>
            <h4>STIU Market</h4>
            <p>
            The STIU Market - Your First Business, Your Experience Term 1.2023 which took place on September 21, 2023, at Stamford International University, Rama 9 campus at the canteen walkway, was a dynamic and harmonious gathering that allowed students to display a diverse range of products and services, from delectable foods to creative handicrafts and fashionable clothing.
            </p>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center' , marginTop: '10%'}}>OUR STUDENTS CLUB</h2>
        <div className="clubLinks">
          {<a href="https://forms.office.com/pages/responsepage.aspx?id=-jf1q8zH60GeYWeUX878j2L6q-CNt-tGt-Uzv917KaJUQ0pZRlE1WTFBTFZIT1VFNDRHWDg5M0hKVi4u" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/badminton.png" alt="Badminton Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="#basketball" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/basketball.png" alt="Basketball Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="https://forms.office.com/pages/responsepage.aspx?id=-jf1q8zH60GeYWeUX878j2L6q-CNt-tGt-Uzv917KaJUM0tVNkVMTkhLUEszNlJaWjYzNFczQlcxWi4u" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/football.png" alt="Football Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="#volleyball" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/volleyball.png" alt="Volleyball Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="#dance" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/dance.png" alt="Dance Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="https://forms.office.com/pages/responsepage.aspx?id=-jf1q8zH60GeYWeUX878j2L6q-CNt-tGt-Uzv917KaJURjExWTBGRkNEMEFSVjRTWEswQU9EWThRVy4u" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/music.png" alt="Music Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="https://forms.office.com/pages/responsepage.aspx?id=-jf1q8zH60GeYWeUX878j2L6q-CNt-tGt-Uzv917KaJUOTI1QUtXR1pGRVpCS0IzREw1U1FNRFUzVi4u" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/coding.png" alt="Coding Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="https://forms.office.com/pages/responsepage.aspx?id=-jf1q8zH60GeYWeUX878j2L6q-CNt-tGt-Uzv917KaJUOVZFWlpRS0lKVzAwM0pIN1FUSzlFREU3TS4u" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/chinese.png" alt="Chinese Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
          {<a href="#myanmar" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/club/myanmar.png" alt="Myanmar Club" width={"20%"} style={{ borderRadius: '5%'}}/></a>}
 
        </div>
      </div>

      <div style={{ textAlign: 'center'}}>
        <h3 style={{ textAlign: 'center', marginTop: '10%'}}>CONNECT WITH US</h3>
        <div className="socialLinks" style={{ display: 'inline-block' }}>
          <a href="https://instagram.com/studentengagementstiu?igshid=NzZlODBkYWE4Ng==" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/icon/instagram_icon.png" alt="Instagram" width={'7%'}/></a>
          <a href="https://www.facebook.com/stamfordthailand?mibextid=LQQJ4d" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/icon/facebook_icon.png" alt="Facebook" width={'7%'}/></a>
          <a href="mailto:STUDENTCONNECT@stamford.edu" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/icon/email_icon.png" alt="Email" width={'7%'} /></a>
          <a href="https://www.linkedin.com" target="_blank" style={{ margin: '0 20px' }}><img src="/assets/images/icon/linkedin_icon.png" alt="LinkedIn" width={'7%'} /></a>
        </div>
      </div>
    </div>
  );
}
