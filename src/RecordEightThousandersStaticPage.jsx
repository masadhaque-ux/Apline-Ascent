import React from "react";
import "./other.css";

export const RecordEightThousandersPage = ({ onNavigate = () => {} }) => {
    const handleNavigate = (event, page) => {
        event.preventDefault();
        onNavigate(page);
    };

    return (
        <>
            <section className="hero">
                <div className="heroInner">
                    <div className="small">
                        World Record Archive
                    </div>

                    <h1>14 Eight-Thousanders</h1>

                    <p>
                        77 Names in the Historical Roster. 39 in the Strict True-Summit Table.
                        The history of climbing all fourteen peaks above
                        8,000 metres includes changing styles, team efforts,
                        and ongoing debate about verification.
                    </p>
                </div>
            </section>

            <main>
                <div className="wrap">
                    <div className="crumb">
                        <a
                            href="#records"
                            onClick={(event) =>
                                handleNavigate(event, "records")
                            }
                        >
                            Records
                        </a>

                        <span> / 14 Eight-Thousanders</span>
                    </div>

                    <div className="contGrid">
                        <section className="contCard">
                            <span className="tag">
                                High Altitude
                            </span>

                            <h2>14 Eight-Thousanders</h2>

                            <p>
                                The history of climbing all fourteen peaks
                                above 8,000 metres includes changing styles,
                                team efforts, and ongoing debate about
                                verification.
                            </p>

                            <h3>How to Evaluate a Record</h3>

                            <ul>
                                <li>
                                    Reinhold Messner became the first broadly recognized climber to complete all 14 in 1986, and he did so without supplementary oxygen. That remains the foundational historical record.

                                    Modern summit-location research changed a different question: who has stood on the actual highest point of all 14 mountains? Guinness adopted the updated 8000ers.com standard in 2023 and reset affected record categories. Under that system, Ed Viesturs is the first true-summit all-14 finisher, while Dong Hong-Juan is the first woman.

                                    The April 13, 2026 8000ers.com compilation lists 39 New Era finishers, 15 women, eight 2025 finishers and 42 correction ascents. Historical and strict records are both worth preserving—as long as the label is visible.
                                </li>

                                
                            </ul>

                            <div className="callout">
                                <img
                                className="recordImg"
                                src="src/assets/images/mtop2.jpg"
                                alt="Historic high-altitude mountaineering expedition"
                                
                            />
                            </div>
                        </section>

                        <aside>
                            <img
                                className="recordImg"
                                src="src/assets/images/mountaintop.jpg"
                                alt="Historic high-altitude mountaineering expedition"
                                
                            />

                            <div className="contCard">
                                <img className="recordImg"
                                src="src/assets/images/mounteverest3.jpg"/>
                                {/* <h2>Record Categories</h2>

                                <div className="pills">
                                    <a
                                        href="#record-seven-summits"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-seven-summits"
                                            )
                                        }
                                    >
                                        Seven Summits
                                    </a>

                                    <a
                                        href="#record-speed"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-speed"
                                            )
                                        }
                                    >
                                        Speed Ascents
                                    </a>

                                    <a
                                        href="#record-winter"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-winter"
                                            )
                                        }
                                    >
                                        Winter Feats
                                    </a>

                                    <a
                                        href="#record-milestones"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-milestones"
                                            )
                                        }
                                    >
                                        Milestone Ascents
                                    </a>
                                </div>

                                <a
                                    className="link"
                                    href="#records"
                                    onClick={(event) =>
                                        handleNavigate(event, "records")
                                    }
                                >
                                    ← All Records
                                </a> */}
                            </div>
                        </aside>
                    </div>
                </div>
                <h3>List of 77 Names in the Historical Roster</h3>
        <div className="tableResponsive">
            
            <table className="recordTable">
                
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Climber</th>
                        <th>Nationality</th>
                        <th>Completion Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Reinhold Messner<br /><small>First broadly recognized completer; all 14 without supplementary oxygen</small></td>
                        <td>Italian</td>
                        <td>1986</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jerzy Kukuczka<br /><small>Second overall; new routes and winter ascents</small></td>
                        <td>Polish</td>
                        <td>1987</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Erhard Loretan</td>
                        <td>Swiss</td>
                        <td>1995</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Carlos Carsolio</td>
                        <td>Mexican</td>
                        <td>1996</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Krzysztof Wielicki</td>
                        <td>Polish</td>
                        <td>1996</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Juanito Oiarzabal</td>
                        <td>Spanish</td>
                        <td>1999</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Sergio Martini</td>
                        <td>Italian</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Park Young-seok</td>
                        <td>South Korean</td>
                        <td>2001</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Um Hong-gil</td>
                        <td>South Korean</td>
                        <td>2001</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Alberto Iñurrategi</td>
                        <td>Spanish</td>
                        <td>2002</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Han Wang-yong</td>
                        <td>South Korean</td>
                        <td>2003</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Ed Viesturs<br /><small>First true-summit completion under modern Guinness/8000ers reclassification</small></td>
                        <td>American</td>
                        <td>2005</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Silvio Mondinelli</td>
                        <td>Italian</td>
                        <td>2007</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Iván Vallejo</td>
                        <td>Ecuadorian</td>
                        <td>2008</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Denis Urubko<br /><small>Confirmed in 2026 by 8000ers.com as a true-summit legacy-era finisher</small></td>
                        <td>Kazakhstani</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Ralf Dujmovits</td>
                        <td>German</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>Veikka Gustafsson</td>
                        <td>Finnish</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Andrew Lock</td>
                        <td>Australian</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>João Garcia</td>
                        <td>Portuguese</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Piotr Pustelnik</td>
                        <td>Polish</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>21</td>
                        <td>Edurne Pasaban<br /><small>First broadly recognized woman</small></td>
                        <td>Spanish</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>Abele Blanc</td>
                        <td>Italian</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>Mingma Sherpa</td>
                        <td>Nepali</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>Gerlinde Kaltenbrunner<br /><small>First woman in the legacy category to complete all 14 without O₂</small></td>
                        <td>Austrian</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Vassily Pivtsov</td>
                        <td>Kazakhstani</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>Maxut Zhumayev</td>
                        <td>Kazakhstani</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Kim Jae-soo</td>
                        <td>South Korean</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Mario Panzeri</td>
                        <td>Italian</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>Hirotaka Takeuchi</td>
                        <td>Japanese</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>Chhang Dawa Sherpa</td>
                        <td>Nepali</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Kim Chang-ho<br /><small>Former fastest no-O₂ completion</small></td>
                        <td>South Korean</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Jorge Egocheaga</td>
                        <td>Spanish</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Radek Jaroš</td>
                        <td>Czech</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Nives Meroi<br /><small>Completed with Romano Benet</small></td>
                        <td>Italian</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td>Romano Benet<br /><small>Completed with Nives Meroi</small></td>
                        <td>Italian / Slovenian</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td>Peter Hámor</td>
                        <td>Slovak</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>Azim Gheychisaz</td>
                        <td>Iranian</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td>Ferran Latorre</td>
                        <td>Spanish</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>39</td>
                        <td>Òscar Cadiach</td>
                        <td>Spanish</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>Kim Mi-gon</td>
                        <td>South Korean</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>41</td>
                        <td>Sanu Sherpa<br /><small>First person broadly reported to complete all 14 twice; second round completed in 2022</small></td>
                        <td>Nepali</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>42</td>
                        <td>Nirmal Purja<br /><small>2019 six-month project; 2024 strict no-O₂ speed record</small></td>
                        <td>Nepali / British</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>43</td>
                        <td>Mingma Gyabu Sherpa</td>
                        <td>Nepali</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>44</td>
                        <td>Kim Hong-bin<br /><small>First disabled climber broadly recognized with all 14</small></td>
                        <td>South Korean</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Nima Gyalzen Sherpa</td>
                        <td>Nepali</td>
                        <td>2022</td>
                    </tr>
                    <tr>
                        <td>46</td>
                        <td>Dong Hong-Juan<br /><small>First woman recognized by Guinness under the modern true-summit standard</small></td>
                        <td>Chinese</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>47</td>
                        <td>Kristin Harila<br /><small>92-day true-summit record with Tenjen Lama Sherpa</small></td>
                        <td>Norwegian</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>48</td>
                        <td>Sophie Lavaud</td>
                        <td>Swiss / French / Canadian</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>49</td>
                        <td>Tunç Fındık</td>
                        <td>Turkish</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td>Tenjen Lama Sherpa<br /><small>92-day true-summit record with Kristin Harila</small></td>
                        <td>Nepali</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>51</td>
                        <td>Gelje Sherpa</td>
                        <td>Nepali</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>52</td>
                        <td>Chris Warner</td>
                        <td>American</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>53</td>
                        <td>Marco Camandona</td>
                        <td>Italian</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>54</td>
                        <td>Naoki Ishikawa</td>
                        <td>Japanese</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>55</td>
                        <td>Tracee Metcalfe</td>
                        <td>American</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>56</td>
                        <td>Sirbaz Khan</td>
                        <td>Pakistani</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>57</td>
                        <td>Dawa Gyalje Sherpa</td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>58</td>
                        <td>Mingma Gyalje Sherpa</td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>59</td>
                        <td>Mario Vielmo</td>
                        <td>Italian</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>Naoko Watanabe<br /><small>First Japanese woman broadly recognized with all 14</small></td>
                        <td>Japanese</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>61</td>
                        <td>Adrian Laza</td>
                        <td>Romanian</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>62</td>
                        <td>Pasang Nurbu Sherpa</td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>63</td>
                        <td>Shehroze Kashif</td>
                        <td>Pakistani</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>64</td>
                        <td>Dorota Rasińska-Samoćko</td>
                        <td>Polish</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>65</td>
                        <td>Adriana Brownlee<br /><small>Youngest woman in broad-list recognition when completed</small></td>
                        <td>British</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>66</td>
                        <td>Nima Rinji Sherpa<br /><small>Youngest broad-list completer; finished at age 18</small></td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>67</td>
                        <td>Alasdair McKenzie</td>
                        <td>French / British</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>68</td>
                        <td>Alina Pekova<br /><small>Guinness youngest woman record under its published category</small></td>
                        <td>Russian / UAE</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>69</td>
                        <td>Ko-Erh “Grace” Tseng</td>
                        <td>Taiwanese</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>70</td>
                        <td>Mingtemba Sherpa</td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>71</td>
                        <td>Tejan Gurung</td>
                        <td>Nepali / British</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>72</td>
                        <td>Pasang Tendi</td>
                        <td>Nepali</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>73</td>
                        <td>Uta Ibrahimi</td>
                        <td>Kosovar</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <td>74</td>
                        <td>Saško Kedev</td>
                        <td>Macedonian</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <td>75</td>
                        <td>Afsane Hesamifard</td>
                        <td>Iranian</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <td>76</td>
                        <td>Chhiring Sherpa</td>
                        <td>Nepali</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <td>77</td>
                        <td>Nikol Kovalchuk<br /><small>Listed in the 2026 8000ers.com New Era table</small></td>
                        <td>American / Russian</td>
                        <td>2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
            </main>
        </>
    );
};

export default RecordEightThousandersPage;
