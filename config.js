var config = {
    style: 'mapbox://styles/mapbox/streets-v12', 
    accessToken: 'pk.eyJ1IjoieWluemhlbmdjaGVuIiwiYSI6ImNtMXFvcm9jNTAyYjEybW9tNGF2OWpiZ2wifQ.14G-PXphSbaM7jZ59Cohgw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: true,
    auto: false,
    title: 'Understanding Earthquakes in China',
    subtitle: 'A Visual Journey through Earthquake Patterns, Impacts, and Preparedness',
    byline: 'By Yinzheng Chen',

    footer: 'Source: USGS Earthquake Data, Open Data Portal <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false, //content shows or not
            title: 'China topographic map',
            image: './images/China.png',
            description: `
            China is one of the countries with the most frequent earthquakes in the world. 
            The only two continental earthquakes with a magnitude of 8 or above in the 21st century occurred in China.
            `,            
            location: {
                center: [102.17776, 36.20321], // Centered over China
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, //rotate maps
            callback: '',
            onChapterEnter: [
                {
                    layer: 'china-highlight',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'china-highlight',
                    opacity: 0
                },
                {
                    layer: 'province-highlight',
                    opacity: 0
                },
                {
                    layer: 'sichuan-highlight',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter2-point-layer',
            alignment: 'right',
            hidden: false,
            title: 'Major Earthquakes in China',
            image: './images/Fissure.png', 
            description: `
                China experiences some of the world's most devastating earthquakes due to its complex tectonic activity. 
                Notable events include:
                <ul>
                    <li><strong>2008 Wenchuan Earthquake:</strong> A magnitude 8.0 earthquake struck Sichuan Province, resulting in over 87,000 casualties and massive infrastructure damage.</li>
                    <li><strong>2010 Yushu Earthquake:</strong> A magnitude 7.1 earthquake affected the Qinghai Province, causing significant losses in remote highland areas.</li>
                    <li><strong>2022 Luding Earthquake:</strong> A recent magnitude 6.8 earthquake struck Luding County in Sichuan, emphasizing the region's continued vulnerability.</li>
                </ul>
                These events highlight the importance of advanced seismic monitoring and preparedness in high-risk regions.
            `,
            location: {
                center: [102.17776, 36.20321], // Centered over China
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, //rotate maps
            callback: '',
            onChapterEnter: [
                {
                    layer: 'china-highlight',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'china-highlight',
                    opacity: 0
                }
            ]
        },
        {
            id: 'province',
            alignment: 'right',
            hidden: false,
            title: 'Earthquake-Prone Provinces in China',
            image: '', // Removed the image
            description: `
                China's most earthquake-prone provinces include Sichuan, Yunnan, Tibet, Xinjiang, and Taiwan. 
                These regions share common characteristics: they lie on active tectonic boundaries or fault zones 
                influenced by the collision and compression of the Indian Plate, Eurasian Plate, and Philippine Sea Plate. 
                Key factors include:

                <ul>
                    <li><strong>Plate Collision:</strong> The Indian Plate's collision with the Eurasian Plate causes intense crustal deformation, making areas like the Tibetan Plateau and its surroundings highly seismic.</li>
                    <li><strong>Fault Zones:</strong> Major fault lines such as the Xianshuihe, Honghe, and Longmenshan faults traverse these provinces, leading to frequent seismic activity.</li>
                    <li><strong>Complex Terrain:</strong> These regions are dominated by highlands and mountainous terrain, which contribute to unstable crustal conditions and shallow earthquake sources.</li>
                </ul>
            `,
            location: {
                center: [104.98643, 32.33096],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'province-highlight',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                
                {
                    layer: 'province-highlight',
                    opacity: 0,
                }
            ]
        },        
        {
            id: 'specific',
            alignment: 'left',
            hidden: false,
            title: 'Recent Earthquake in Luding, Sichuan',
            image: './images/sichuan.png', 
            description: `
                On 2023/01/26, a magnitude 5.6 earthquake struck near Luding County, Sichuan Province. 
                The quake was strongly felt in the epicentral area and caused noticeable shaking in Chengdu, the provincial capital.
                Key details include:
                <ul>
                    <li><strong>Epicenter:</strong> Located approximately 38 km from Luding County and 41 km from Kangding City.</li>
                    <li><strong>Proximity to Previous Events:</strong> The epicenter lies just 8 km from the 2022 magnitude 6.8 earthquake in Luding County.</li>
                    <li><strong>Topography:</strong> The average elevation near the epicenter is approximately 3,984 meters.</li>
                    <li><strong>Impact:</strong> While the quake caused strong tremors locally, no casualties were reported.</li>
                </ul>
                This event highlights the region's seismic activity and the importance of preparedness in high-altitude areas.
            `,
            location: {
                center: [104.98643, 32.33096],
                zoom: 6,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'sichuan-highlight',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 0
                },
                {
                    layer: 'sichuan-highlight',
                    opacity: 0
                }
            ]
        },
        {
            id: 'final',
            alignment: 'fully',
            hidden: false,
            title: 'Earthquakes and Population Distribution',
            image: './images/1.png', 
            description: `
                Over the past decade, China has experienced a significant number of earthquakes, as highlighted by this heatmap. The distribution of seismic activity is concentrated in specific regions such as Sichuan, Tibet, and Yunnan, where tectonic plate interactions and fault zones are highly active.

                This visualization highlights the correlation between population density and earthquake occurrences. While the eastern regions of China are densely populated, the western regions, despite lower population densities, are prone to higher seismic risks due to their geological settings. This duality emphasizes the need for region-specific disaster preparedness strategies.

                Key takeaways include:
                <ul>
                    <li><strong>Seismic Hotspots:</strong> The Sichuan Basin and surrounding areas remain China's most earthquake-prone zones.</li>
                    <li><strong>Population at Risk:</strong> Urban centers near fault lines, such as Chengdu and Kunming, face elevated risks.</li>
                    <li><strong>Mitigation Efforts:</strong> Enhanced building codes and early warning systems are crucial in reducing earthquake impacts in high-risk regions.</li>
                </ul>
                As China continues to develop, balancing urbanization with effective disaster management policies will be critical to mitigating the impact of future earthquakes.
            `,
            location: {
                center: [102.17776, 36.20321],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'population-layer',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: []
        }
    ]
};
