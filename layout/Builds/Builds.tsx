import { IBuild } from "@/types";

interface IBuildsLayoutProps {
    builds: IBuild[];
    setActiveBuild: (build: IBuild) => void;
}

const BuildsLayout = ({ builds, setActiveBuild }: IBuildsLayoutProps) => {
    return (
        <section>
            <p>Builds</p>
            {builds.map((build) => (
                <>
                    <section>
                        <div>
                            <div>
                                <h3>{build.name}</h3>
                                <p>{build.description}</p>
                                <p>{build.status}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setActiveBuild(build)}
                                >
                                    Activar
                                </button>
                                <button>Editar</button>
                                <button>Eliminar</button>
                                <button>Duplicar</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3>Habilidades</h3>
                            <ul>
                                {build.abilities.map((ability) => (
                                    <li>{ability}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </>
            ))}
        </section>
    )
}

export default BuildsLayout;
