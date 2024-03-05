import TeamCard from '../ui/TeamCard';
import teams from '../../constants/teams';

const Team = () => {
  return (
    <section>
      <div className="bg-white flex flex-col mt-24 py-2">
        <div className="flex items-center flex-col py-5">
          <span className="w-[2.5rem] h-[4px] bg-gradient-to-r from-pink to-indigo rounded-full" />
          <h2 className="text-md font-bold text-black">Our Team</h2>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 justify-center items-center my-8 gap-3 px-4 md:px-0">
          {teams.map ((t, i) => {
            return (
              <TeamCard
                key={i}
                name={t.name}
                regNo={t.regNo}
                role={t.role}
                info={t.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;
