'use client';

import MOCK_BUILD from "@/mocks/builds";
import { useState } from "react";
import BuildsLayout from "../Builds/Builds";
import BuildPreview from "../BuildPreview/BuildPreview";
import BuildsAllMissingGear from "../BuildsAllMissingGear/BuildsAllMissingGear";
import BuildsAllMissingTraits from "../BuildsAllMissingTraits/BuildsAllMissingTraits";

const builds = MOCK_BUILD;

const TLLayout = () => {
    // const builds = getBuildsFromBackend();
    const wearingBuild = builds.find((build) => build.isCurrentlyWearing) ?? MOCK_BUILD[0];
    const [activeBuild, setActiveBuild] = useState(wearingBuild);

    return (
        <>
            <BuildsLayout builds={MOCK_BUILD} setActiveBuild={setActiveBuild} />
            <BuildPreview build={activeBuild} />
            <BuildsAllMissingGear builds={MOCK_BUILD} />
            <BuildsAllMissingTraits builds={MOCK_BUILD} />
        </>
    )
}

export default TLLayout;