import React from 'react';
import Link from 'next/link';
import styles from "../styles/Infos.module.css"
import Head from 'next/head';
const Infos = () => {
    return (
        <div>
            <Head>
                <title>SidINFO | INFO</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Logo.png" />
            </Head>
            <div className={styles.main}>
                <header id={styles.header}>
                    <div id={styles.logo}>
                        <img src="/Logo.png" alt='logo' height={100} />
                    </div>
                    <div id={styles.p1}>
                        <Link href="/infos">
                            <div className={styles.boitePurple}>
                                <p className={styles.p}>En savoir plus</p>
                            </div></Link>
                    </div>
                    <div id={styles.p2}>
                        <Link href="/">
                            <div className={styles.boitePurple}>
                                <p className={styles.p}>Play</p>
                            </div></Link>
                    </div>
                </header>

                <div className={styles.content1}>
                    <h1 className={styles.titre}>Les Informations Principales sur le VIH</h1>
                    <div className={styles.t1}>
                        <div className={styles.tete1}>Comment on l`attrape</div>
                        <div className={styles.contenu1}>Grace l’un des cinq liquides
                            biologiques pouvant contenir le
                            virus :
                            <ul>
                                <li>Le sperme dont le liquide
                                    pré-éjaculatoire</li>
                                <li>Les sécrétions anales</li>
                                <li>Les sécrétions vaginales</li>
                                <li>Le lait humain</li>
                                <li>Le sang
                                    Le virus doit sortir du corps.
                                    Une porte d’entrée dans le
                                    système sanguin de la personne
                                    non porteuse :</li>
                                <li>Plaie</li>
                                <li>Lésions</li>
                                <li>Muqueuse buccale, anale
                                    ou vaginale</li>
                                <li>Injection</li>
                                <li>Ingestion</li>
                                <li>Tatouage</li>
                                <li>Perçage</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.t2}>
                        <div className={styles.tete2}>Les moyens de protection</div>
                        <div className={styles.contenu2}>Les préservatifs féminins / masculins et la digue dentaire sont les seuls
                            moyens de contraception qui protège du VIH.
                            Les personnes séropositives prennent généralement un traitement qui permet
                            de rendre la charge virale dans le sang indétectable donc aucun risque de
                            contamination.
                        </div>
                    </div>
                    <div className={styles.t3}>
                        <div className={styles.tete3}>En cas de doute</div>
                        <div className={styles.contenu3}>Il est recommandé de faire un teste de dépistage 12 semaines suivant la
                            possible transmission.
                            Vous pouvez également en parler à une professionnelle de santé ou consulté
                            des sites qui répertorie les moyens de transmission avec leur taux de
                            transmission.
                        </div>
                    </div>
                    <div className={styles.t4}>
                        <div className={styles.tete4}>Les symptomes</div>
                        <div className={styles.contenu4}>La primo-infection peut parfois
                            passer inaperçue, puisque ses
                            symptômes s’apparentent à ceux
                            de la grippe : fièvre, maux de
                            gorge, douleurs musculaires,
                            fatigue, gonflement des
                            ganglions lymphatiques et des
                            éruptions cutanées. Pour plus
                            d’informations, consulté un site
                            officiel</div>
                    </div>
                    <div className={styles.t5}>
                        <div className={styles.tete5}>Les traitements</div>
                        <div className={styles.contenu5}>Il existe un traitement a base d’antirétroviraux pour le VIH qui
                            permet de rendre la charge virale indétectable et il faut avoir un
                            suivi médical adapté.
                            Les médicaments utilisés contre le VIH sont des substances qui ont été
                            conçues pour bloquer différentes étapes de la multiplication du VIH ou pour
                            réduire sa capacité à infecter de nouveaux lymphocytes ce sont des
                            médicaments dits « antiviraux »
                            La Prophylaxie post-exposition (PPE) est un traitement qui nuis
                            au processus de réplication du virus s’il est pris efficacement et
                            dans les temps requis.
                            Les traitements sont pris en charge à 100 % par l’Assurance Maladie.</div>
                    </div>
                    <div className={styles.t6}>
                        <div className={styles.tete6}>Les idée reçus</div>
                        <div className={styles.contenu6}>Le SIDA est un stade du VIH donc on
                            peut avoir le VIH sans avoir le sida
                            alors qu’a l’inverse si on a le sida on a
                            forcément le VIH.</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Infos;