import OurTeamCard from "./OurTeamCard";
import firstPersonPhoto from "../../../assets/Images/teamImage/fabio.jpg";
import secondPersonPhoto from "../../../assets/Images/teamImage/ariela.jpg";
import thirdPersonPhoto from "../../../assets/Images/teamImage/marlena.jpg";

export default function OurTeamView() {
  const team = [
    {
      name: "Fabio Muscolo",
      profession: "Project cordinator",
      imgSrc: firstPersonPhoto,
      email: "fabio@eumobility.pl",
      phoneNumber: "+39 351 411 48 36",
    },
    {
      name: "Ariela Treves",
      profession: "Project cordinator",
      imgSrc: secondPersonPhoto,
      email: "ariela@eumobility.pl",
      phoneNumber: "+39 351 412 62 14",
    },
    {
      name: "Marlena Napierała",
      profession: "Project cordinator",
      imgSrc: thirdPersonPhoto,
      email: "marlena@eumobility.pl",
      phoneNumber: "+39 351 478 90 59",
    },
  ];
  return (
    <div className="w-full bg-white ">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-10 md:text-left">
          <div className="text-lg font-bold mb-4 text-[var(--green-text-color)]">
            Volunteers
          </div>
          <div className="text-3xl font-semibold mb-4">Meet our team</div>
          <div className="text-md text-[var(--gray-text-color)] max-w-3xl">
            Meet our project coordinators in Italy, the people who bridge
            communication between teams, supervise project workflows, and make
            sure everything progresses seamlessly from start to finish.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex justify-center">
              <OurTeamCard
                key={index}
                name={member.name}
                photo={member.imgSrc}
                profession={member.profession}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
