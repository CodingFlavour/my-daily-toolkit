import { IBuild } from "@/types";
import useBuildsAllMissingTraits from "./hooks/useBuildsAllMissingTraits";

interface IBuildsAllMissingTraitsProps {
    builds: IBuild[];
}

const BuildsAllMissingTraits = (
    { builds }: IBuildsAllMissingTraitsProps
) => {
    const { traits } = useBuildsAllMissingTraits({ builds });

    return (
        <div>
            <h1>Builds All Missing Traits</h1>
            <section>
                <ul>
                    {Object.entries(traits).map(([trait, lvl]) =>
                        <li key={trait}>
                            <span>{trait}: {lvl}</span>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    )
}

export default BuildsAllMissingTraits;