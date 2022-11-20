import {
  IconBrandGithub,
  IconMapPin,
  IconAt,
  IconDeviceMobile,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandSkype
} from '@tabler/icons';

export default function Index() {
  return (
    <div className="bg-gray-100 min-h-screen w-full pb-5">
      <div className="cover-image h-[200px] bg-gradient-to-b from-slate-400 to-slate-100"></div>
      <div className="grid grid-cols-8 gap-5 w-10/12 mx-auto relative -top-20">
        <div className="col-span-3 space-y-5">
          <div className="resume-section">
            <div className="space-y-2 relative">
              <img className="absolute rounded-full border-4 w-32 h-32 z-100 -top-2/4 inset-x-0 m-auto" src="https://avatars.githubusercontent.com/u/8407450" />
              <h1 className="text-2xl font-bold">Minh Vo</h1>
              <div>
                <p>Web developer</p>
                <p>Main stack: Ruby on Rails</p>
              </div>

              <p className="flex space-x-2">
                <IconMapPin size={22}/>
                <span>Nha Trang - Khánh Hòa - Việt Nam</span>
              </p>
              <p className="flex space-x-2 items-center">
                <IconAt size={22}/>
                <a href="mailto:quangminhvo79@gmail.com">quangminhvo79@gmail.com</a>
              </p>
              <p className="flex space-x-2 items-center">
                <IconDeviceMobile size={22}/>
                <a href="tel:+84789.595.779">+84789.595.779</a>
              </p>
            </div>
            <p className="flex space-x-4 items-center mt-5">
              <a className="w-full flex justify-center" href="https://www.linkedin.com/in/quang-minh-vo-36b55615a/" target="_blank">
                <IconBrandLinkedin size={32} color="#1e40af"/>
              </a>
              <a className="w-full flex justify-center" href="https://github.com/quangminhvo79" target="_blank">
                <IconBrandGithub size={32}/>
              </a>
              <a className="w-full flex justify-center" href="skype:quangminhvo79@gmail.com?chat" target="_blank">
                <IconBrandSkype size={32} color="#0ea5e9"/>
              </a>
              <a className="w-full flex justify-center" href="javascript:void(0)">
                <IconBrandFacebook size={32} color="#1e40af"/>
              </a>
              <a className="w-full flex justify-center" href="javascript:void(0)">
                <IconBrandTwitter size={32} color="#38bdf8"/>
              </a>
            </p>
          </div>
          <div className="resume-section space-y-2">
            <h1 className="text-2xl font-bold"> Education: </h1>
            <p><a href="https://ntu.edu.vn/"><b> Nha Trang University </b></a></p>
            <p><i> Graduated with Bachelor Dearee in Information Technology from Nha Trang University.</i></p>
            <p><u>Specialization: Software Engineering</u></p>
          </div>
        </div>

        <div className="col-span-5 space-y-5">
          <div className="resume-section space-y-2">
            <h1 className="text-2xl font-bold">About me</h1>
            <p>
              <span>I'm experienced Ruby on Rails Developer from Nha Trang, Việt Nam with a passion for building software products.</span>
              <span> I have been building software products since 2015 starting with PHP, NodeJs and shifted to Ruby on Rails.</span>
            </p>
          </div>

          <div className="resume-section space-y-2">
            <h1 className="text-2xl font-bold">Experience</h1>
            <div className="space-y-5">
              <div className="space-y-2">
                <p class="flex justify-between mb-3">
                  <span className="font-semibold italic underline underline-offset-2">BizzOn Outsourcing Company</span>
                  <span> June 2015 - May 2017 </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Involved to build CMS to make it reusable  for all outsourcing projects in company.</li>
                  <li>Involved to maintain and fix critical issue for all outsourcing project in company.</li>
                  <li>Involved to build all outsourcing project with PHP, NodeJS, ReactJS, AngularJS... </li>
                  <li>Build an internal app (chrome extension) to help PM team and Design team can generate css animation for any object in browser by ReactJS.</li>
                  <li>Build drawing and coloring games for kids using Unity Engine.</li>
                  <li>
                    Involved to building company startup applications about social networking in the field of traffic
                    (news feed, notifications, cms, practice driving law, ...  ).
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p class="flex justify-between mb-3">
                  <span className="font-semibold italic underline underline-offset-2">Steinsvik</span>
                  <span> May 2017 - May 2018 </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Convert the company legacy app to new version by AngularJS.</li>
                  <li>Support and guidance for colleagues and interns to learn new technologies about front-end stack.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p class="flex justify-between mb-3">
                  <span className="font-semibold italic underline underline-offset-2">Jobready</span>
                  <span> May 2018 - July 2021 </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Involved to develop new features for the company's product - a human resource and employment management software.</li>
                  <li>Investigate issues, fix and update the business logic for the product accordance with customer reguirements.</li>
                  <li>Developed model and optimized service code to reduce N+1 problem.</li>
                  <li>Involved to update test coverage to over 95%.</li>
                  <li>Involved to upgrade rails version.</li>
                  <li>Support and guidance team-mate to familiar business, debug and maintain system.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p class="flex justify-between mb-3">
                  <span className="font-semibold italic underline underline-offset-2">MotionsCloud</span>
                  <span> July 2021 - Present </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Involved to develop and upgrade video call feature.</li>
                  <li>Research and apply new technologies to current applications.</li>
                  <li>Investigate issues, fix and update the business logic for the product accordance with customer reguirements.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-section space-y-2">
            <h1 className="text-2xl font-bold">Technical skills</h1>
            <div className=" space-y-5">
              <div className="flex justify-between w-full">
                <span className="w-3/12 font-semibold italic underline underline-offset-2">Languages and Skills:</span>
                <p className="w-8/12">
                  Ruby on Rails, NodeJS, Javascript, ReactJS, AngularJS, PHP, Mysql, Postgresql, mongoDB.
                </p>
              </div>

              <div className="flex justify-between w-full">
                <span className="w-3/12 font-semibold italic underline underline-offset-2">Web Technologies and Tools:</span>
                <p className="w-8/12">
                  AWS, Heroku, S3, Cloud, Docker, Linux, Git, Postman, Sublime, Visual Code, Slack, Jira.
                </p>
              </div>
            </div>
          </div>

          <div className="resume-section space-y-2">
            <h1 className="text-2xl font-bold">Soft skills</h1>
            <div>
              <ul className="list-disc list-inside">
                <li>Problem-solver (You can find me fixing things in creative ways when I'm on work).</li>
                <li>Team-player (I love to teach and share the knowledge that I think that it's relevant).</li>
                <li>Fast learner (I extremely love to learn new technologies and can use them quickly).</li>
                <li>Proactive (I don't like to be static, even I also like to multitask if it doesn't affect my performance).</li>
                <li>High Performance Under Pressure.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}