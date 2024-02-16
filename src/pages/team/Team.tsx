import { useTeamHooks } from "./Team.hooks";
import { TeamAll } from "./component/team-all/TeamAll";
import { TeamDetails } from "./component/team-details/TeamDetails";

export const Team = () => {
    const { idName } = useTeamHooks();

    return (
        <div>
            <div>
                { idName
                    ? <TeamDetails />
                    : <TeamAll />
                }
            </div>
        </div>
    );
};
