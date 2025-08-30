// import Image from "next/image";
// import Card from "@/components/Card"
// import Badge from "@/components/Badge"
// export default function Home() {
//   return (
//     // <>
//     //   <button className="btn btn-primary">Test</button>
//     // </>

//     <>
//       <Card className="col-span-4"> hello testing my old friend
//       <Badge> Badge Test</Badge>
//       <Image src="/images/profile.jpeg" alt="Avatar" width={240} height={240} className="rounded-2xl object-cover"></Image>
//       </Card>
//       <Badge> Badge Test</Badge>
//       <div className="bg-red-700 text-white p-6 rounded-2xl">tailwind test</div>
//       <button className="btn btn-primary">daisyui test</button>
//     </>
//   );
// }

// app/page.tsx
import Image from "next/image"
import Card from "@/components/Card"
import Badge from "@/components/Badge"
import { Gamepad2, Clapperboard, Plane, Instagram, Youtube, Globe, Palette, BicepsFlexed, Cpu } from "lucide-react"

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

        {/* Avatar */}
        <Card className="md:col-span-4 flex items-center justify-center aspect-[4/5] md:aspect-auto">
          <Image
            src="/images/profile.jpeg" alt="Avatar"
            width={420} height={420}
            className="rounded-2xl object-cover"
          />
        </Card>

        <div className="md:col-span-8 grid grid-cols-1 gap-6">
          {/* Summary */}
          <Card className="flex items-center w-full">
            <p className="text-xl md:text-2xl leading-relaxed">
              My name is Jared Inya-Agha, I am an innovative software developer and experienced electrical engineer with 4+ years of experience designing and building projects that exude high quality problem solving skills.
            </p>
          </Card>

          {/* Interests */}
          <Card className="w-full">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="opacity-80 mr-2">Interests</span>
              <Badge><Gamepad2 className="size-4" /> Gaming</Badge>
              <Badge><Cpu className="size-4" /> Technology</Badge>
              <Badge><BicepsFlexed className="size-4" /> Fitness</Badge>
              <Badge><Plane className="size-4" /> Traveling</Badge>
              <Badge><Palette className="size-4" /> Art</Badge>
            </div>
          </Card>
        </div>

        {/* Experience left */}
        <Card className="md:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Federal Aviation Administration</h3>
              <p className="opacity-80">Electrical Design Engineer</p>
            </div>
            <Badge className="text-xs">2023 – now</Badge>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 opacity-90">
            <li>Developed Lighting and Dimming System Replacement Project to 50% Design Phase and Submitted for design review.</li>
            <li>Performed the role of Project Engineering Lead and developed project schedule, scope and controlled cost estimate for ZBW Project.</li>
            <li>Provided assistance as the Electrical Engineer on colleagues’ design projects and site surveys in remote locations.</li>
            <li>Conducted site surveys for design projects in various locations near the east coast of the United States in GA, FL, AL, and NH.</li>
          </ul>
        </Card>

        {/* Experience right */}
        <Card className="md:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Key Engineering Group</h3>
              <p className="opacity-80">Electrical Engineer</p>
            </div>
            <Badge className="text-xs">2020 – 2023</Badge>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 opacity-90">
          <li>Awarded passing status on Fundamentals of Engineering Exam and received Engineer in Training license in the State of Georgia </li>
          <li>Produced hundreds of pages of detailed electrical floor plan drawings of sections from all 7 concourses of Hartsfield Jackson Atlanta International Airport</li>
          <li>Created circuit diagrams of emergency generator systems for major Life Safety project</li>
          </ul>
        </Card>
        <div className="md:col-span-6 grid grid-cols-1 gap-6">
          {/* Tools */}
          <Card className="w-full">
            <div className="mb-2 font-semibold">Languages</div>
            <div className="flex flex-wrap gap-2">
              {["Python","Javascript","C++","Java"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </Card>
          <Card className="w-full">
            <div className="mb-2 font-semibold">Softwares</div>
            <div className="flex flex-wrap gap-2">
              {["VS Code","GitHub","GitLab"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </Card>

          {/* Languages */}
          <Card className="w-full">
            <div className="mb-2 font-semibold">Tools</div>
            <div className="flex gap-2">
              {["Jenkins","Docker","Kubernetes"].map(f => <Badge key={f}>{f}</Badge>)}
            </div>
          </Card>
        </div>

        {/* Education */}
        <Card className="md:col-span-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Boot Camp Certificate</h4>
                <Badge className="text-xs">2021-2022</Badge>
              </div>
              <p className="opacity-80"> Full Stack Flex Web Development Bootcamp – Georgia Technical Institute, Atlanta, Georgia</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Undergraduate Degree</h4>
                <Badge className="text-xs">2017–18</Badge>
              </div>
              <p className="opacity-80">Bachelors of Science in Electrical and Computer Engineering – Statesboro, Georgia</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">High School Diploma</h4>
                <Badge className="text-xs">2015</Badge>
              </div>
              <p className="opacity-80">Starr's Mill High School – Fayetteville, Georgia</p>
            </div>
          </div>
        </Card>

        {/* Portfolio links */}
        <Card className="md:col-span-12">
          <div className="mb-2 font-semibold">Projects</div>
          <div className="flex flex-wrap gap-2">
          </div>
        </Card>

        {/* Details */}
        <Card className="md:col-span-12">
        <div className="mb-2 font-semibold">Personal Bio and Contact Info</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Badge>👤 28 years</Badge>
          </div>
        </Card>

      </div>
    </main>
  )
}
