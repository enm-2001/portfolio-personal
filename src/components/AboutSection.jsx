import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Developer</h3>

            <p className="text-muted-foreground">
              With over 3 years of experience building modern web applications,
              I worked with technologies like React, JavaScript, and Node.js. I
              focus on creating responsive, user-friendly interfaces and
              developing scalable solutions that improve performance and
              usability.
            </p>

            <p className="text-muted-foreground">
              I have worked on real-world systems such as a Hospital Management
              System and an analytics dashboard with interactive charts and
              customizable filters. I enjoy solving complex problems, optimizing
              application performance, and building clean, maintainable code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Ekta_mer.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Application Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable and responsive web applications using
                    modern JavaScript frameworks like React and Vue.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating REST APIs and managing data communication
                    between frontend applications and backend services.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Performance Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Improving application performance through techniques like
                    lazy loading, efficient state management, and optimized
                    component rendering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
