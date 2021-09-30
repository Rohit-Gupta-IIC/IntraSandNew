app.service('localdb', function(){
    this.services = [
            {
                name:'Web Development',
                icon:'bi-bezier',
                reverse:'',
                img:"develop.png",
                color:"#ffccc7",
                description:[
                    'We provide dynamic and static websites, blogs, landing pages, directories, and contact pages, as well as e-commerce, portfolio, homepages, magazine, and social media websites.',
                    'Portal, Animated, Rich Internet, Progressive, JavaScript Powered, Static, and Dynamic web apps, as well as Single and Multi-Page Applications, are all available.' ,
                    'To offer the highest quality output, we use cutting-edge technologies such as React JS, Angular JS, and Next JS.'
                ],
                subSer:[
                    {
                        name:'PHP Web Development',
                        description:'PHP-based apps are cross-platform web applications that offer a flexible development strategy that allows you to easily expand the functionality and coverage of the applications.',
                    },
                    {
                        name:'Wordpress Web Development',
                        description:'WordPress is the most well-known and widely used design program. In terms of design, WordPress-based apps are inherently easy and adaptable. WordPress apps are used to develop W3C-compliant and SEO-friendly applications.'
                    },
                    {
                        name:'JavaScript Frameworks-based Web Development',
                        description:'JavaScript is one of the three fundamental components of the internet (World Wide Web). Javascript-based apps include HTML templating, use a component-based approach, automate data administration, and make CMS integration simple.'
                    },
                    {
                        name:'eCommerce Development',
                        description:'eCommerce web applications, often known as electronic commerce or online commerce, refer to the purchase and sale of products or services over the internet, as well as the transmission of money and data to complete these transactions. To mention a few benefits, eCommerce applications assist to promote brand awareness, improve customer experience, and increase visitor engagement.'
                    }
                ]
            },
            {
                name:'Web Design',
                icon:'bi-palette',
                reverse:"flex-lg-row-reverse",
                img:"design.png",
                color:"#e6fffb",
                description:[
                    "We focus on providing high-quality, user-friendly, SEO-friendly, straightforward, and professional web design services.",
                    "Static Page Layout, Dynamic Website Layout, Fixed Design Layout, Responsive Design Layout, Liquid or Fluid Design Layout, and Single Page Design Layout are some of the services we provide."
                ],
                subSer:[
                    {
                        name:"Responsive Web Design",
                        description:"A responsive website allows you to use it on either computers or mobile phones. These designs are out-of-the-box concepts to relieve stress for new technology users and gain a better understanding of the market and future potentials."
                    },
                    {
                        name:"Dynamic Web Design",
                        description:"The rapidly digitalized generation spends the majority of their time perusing the web. And the high-speed connectivity makes it relaxing for everyone. To save time and effort, we utilize smart web Intel in dynamic web design to provide a healthy and stress-free experience throughout the website."
                    },
                    {
                        name:"Static Web Design",
                        description:"A large number of users want personalized company profiles to have their name in the market and meet the needs of customers. Static site design is a simple and excellent option. The beauty of business is its simplicity, which is simple yet effective."
                    },
                    {
                        name:"Web Portal Design",
                        description:"A business cannot function without employees. To keep relevant data, the firm needs management skills and an application. Online services provide you with a specific place on the internet for storing information that employees may access from anywhere over the internet. To ensure that these arrangements are met, we additionally provide Web Portal Service for clients who operate in the back"
                    },
                    {
                        name:"Custom Web design",
                        description:"Because no two businesses are the same, why should they have the same sort of website? To suit the needs of every sort of user, different clients demand bespoke, personalized web designs. In order to do so, we push ourselves to be the best."
                    },
                ]
            },
            {
                name:"Desktop application",
                icon:'bi-laptop',
                reverse:'',
                img:"desktop.png",
                color:"#f9f0ff",
                description:[
                    "We build desktop applications for Linux, Mac, and Windows using Electron JS and Python.",
                    "We concentrate on developing cross-platform apps that can be hosted locally with the highest level of security and at a low processor performance."
                ],
                subSer:[
                    {
                        name:"Institutions Management Systems",
                        description:"We automate an institute's activities such as Student Admission Management, Fee Management, Attendance Management, Examination Management, Human Resource Management, Time Table Management, Salary Management, and Records & Profiles Management by utilising cutting-edge technology."
                    },
                    {
                        name:"Employee Management Systems",
                        description:"An employee management system is a platform where all work-related, as well as vital personal information of an employee, are securely kept and maintained. You can manage administrative tasks more easily and quickly if you use this system."
                    },
                    {
                        name:"Restaurant Management Software",
                        description:"A restaurant management system is a catch-all phrase for software that aids in the efficiency of foodservice operations. It combines the best features of standard POS (Point of Sale) systems with capabilities that accept table reservations, streamline inventory management, handles invoicing, give actionable data, and aid with marketing efforts like CRM."
                    },
                ]
            },
            {
                name:"Mobile app development",
                icon:"bi-phone",
                reverse:'flex-lg-row-reverse',
                img:"mobile.png",
                color:"#f4ffb8",
                description:[
                    "We offer services such as Android, iOS, and cross-platform applications. We specialize in eCommerce, business management, and the development of custom applications.",
                    "It's becoming popular to have a business application on your mobile phone to help you do business in the easiest way possible.",
                    "Mobile applications are critical in terms of market expansion. The increased usage of mobile phones and laptop computers has resulted from the digitalization of every sector. Keeping the same phenomena in mind, we developed and created the finest digital solution and support for your organization."
                ],
                subSer:[
                    {
                        name:"eCommerce App Development",
                        description:"content missing"
                    },
                    {
                        name:"Business Management App",
                        description:"content missing"
                    },
                    {
                        name:"Custom App Development",
                        description:"content missing"
                    }
                ]
            },
            {
                name:"IoT App Development",
                icon:"bi-globe",
                reverse:'flex-lg-row-reverse',
                img:"iot.png",
                color:"#fffbe6",
                description:[
                    "We create Raspberry Pi, Arduino, Node MCU, and other platform-based solutions for both educational and commercial purposes.",
                    "Our major services include Wired and Wireless Smart Home, and Automatic car number plate recognition systems.",
                    "We help students to make projects for colleges and schools as well."
                ],
                subSer:[
                    {
                        name:"Smart Homes",
                        description:"A smart home is a handy house setup in which appliances and equipment may be automatically managed remotely using a mobile or other networked device from anywhere with an internet connection. Devices in a smart home are networked through the internet, allowing the user to remotely control services such as home security, heating, lighting, and a home theatre."
                    },
                    {
                        name:"Smart Workplace",
                        description:"A smart workplace employs technology to assist workers to operate more successfully and efficiently, whether they work in the office or remotely, and interact with their in-office colleagues. Smart offices utilize linked technology and analytics to learn how to best serve employees in order for them to work successfully."
                    },
                    {
                        name:"Customized Hardwares",
                        description:"Hardware may be found all around the world, including your device, which has five different types of hardware devices ranging in price from less than a dollar to a few thousand dollars. We create application-specific hardware devices to meet all needs."
                    }
                ]
            },
            {
                name:"Technical Content Writing",
                icon:"bi-pencil",
                reverse:'',
                img:"writing.png",
                color:"#bae7ff",
                description:[
                    "We exhibit enhanced SEO-friendly technical content writing services that help any organisation become more user-friendly and instructive.",
                    "SEO Content Writing, Articles, Blogs, Social Media Content, E-Books, Newsletters, Internal & External Communications, Email Content Campaigns, Audio & Video Content are some of the services we offer.",
                    "As a dependable firm, we recognise the significance of content in any business's growth and popularity. Content entices visitors to spend more and more time on your website, allowing you to learn more about the services and goods. At IntraSand, we create content to promote and grow the business."
                ]
            }
        ];
});

