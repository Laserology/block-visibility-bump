/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/components';

/**
 * Plugin user interface icons
 */
const icons = {};

icons.logo = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="250px"
		height="35px"
		viewBox="0 0 250 35"
	>
		<Path
			d="M68.8745855,23.0457132 L68.8745855,25.3138355 L66.105814,25.3138355 L66.105814,2.45116279 L68.9658637,2.45116279 L68.9658637,13.1264584 L69.0571419,13.1264584 C69.5439613,12.4208168 70.2234699,11.8210305 71.095688,11.3270814 C71.9679062,10.8331323 73.0023819,10.5861614 74.1991463,10.5861614 C75.2742058,10.5861614 76.252901,10.7776898 77.1352612,11.1607524 C78.0176214,11.543815 78.7782654,12.0780784 79.4172158,12.7635588 C80.0561663,13.4490392 80.5480494,14.2504344 80.8928798,15.1677685 C81.2377102,16.0851025 81.4101229,17.0679457 81.4101229,18.1163275 C81.4101229,19.1647092 81.2377102,20.1525926 80.8928798,21.0800073 C80.5480494,22.0074219 80.0612373,22.8138573 79.4324289,23.4993377 C78.8036205,24.1848181 78.0429765,24.7241218 77.1504743,25.1172649 C76.257972,25.5104081 75.253922,25.7069767 74.1382942,25.7069767 C73.1038029,25.7069767 72.1200368,25.4801668 71.1869662,25.0265401 C70.2538957,24.5729133 69.5033937,23.9126443 68.9354377,23.0457132 L68.8745855,23.0457132 Z M78.4587949,18.1163275 C78.4587949,17.4510083 78.3573757,16.8058599 78.1545343,16.1808631 C77.9516929,15.5558663 77.6474353,15.0014419 77.2417524,14.5175734 C76.8360696,14.0337049 76.3340446,13.6506481 75.7356624,13.3683914 C75.1372802,13.0861348 74.4425587,12.9450086 73.6514772,12.9450086 C72.9212481,12.9450086 72.2569524,13.0861348 71.6585702,13.3683914 C71.060188,13.6506481 70.5480211,14.0337049 70.1220541,14.5175734 C69.6960871,15.0014419 69.3664747,15.5558663 69.1332071,16.1808631 C68.8999394,16.8058599 68.7833074,17.4610887 68.7833074,18.1465691 C68.7833074,18.8320495 68.8999394,19.4872783 69.1332071,20.1122751 C69.3664747,20.7372719 69.6960871,21.286656 70.1220541,21.7604439 C70.5480211,22.2342319 71.060188,22.6122485 71.6585702,22.8945051 C72.2569524,23.1767617 72.9212481,23.3178879 73.6514772,23.3178879 C74.4425587,23.3178879 75.1372802,23.1717215 75.7356624,22.8793843 C76.3340446,22.5870471 76.8360696,22.19895 77.2417524,21.7150815 C77.6474353,21.231213 77.9516929,20.6767886 78.1545343,20.0517918 C78.3573757,19.426795 78.4587949,18.7816467 78.4587949,18.1163275 Z M88.0632883,25.3138355 L85.2032385,25.3138355 L85.2032385,2.45116279 L88.0632883,2.45116279 L88.0632883,25.3138355 Z M107.404121,18.1163275 C107.404121,19.2251928 107.206354,20.2433175 106.810813,21.1707321 C106.415272,22.0981468 105.867609,22.899542 105.167806,23.5749418 C104.468003,24.2503416 103.641437,24.7745246 102.688082,25.1475066 C101.734727,25.5204886 100.710393,25.7069767 99.6150496,25.7069767 C98.5197059,25.7069767 97.4953721,25.5204886 96.5420174,25.1475066 C95.5886627,24.7745246 94.7671673,24.2503416 94.0775064,23.5749418 C93.3878456,22.899542 92.8452529,22.0981468 92.4497122,21.1707321 C92.0541714,20.2433175 91.856404,19.2251928 91.856404,18.1163275 C91.856404,17.0074621 92.0541714,15.9943776 92.4497122,15.0770436 C92.8452529,14.1597095 93.3878456,13.3683948 94.0775064,12.7030756 C94.7671673,12.0377564 95.5886627,11.5186136 96.5420174,11.1456316 C97.4953721,10.7726496 98.5197059,10.5861614 99.6150496,10.5861614 C100.710393,10.5861614 101.734727,10.7726496 102.688082,11.1456316 C103.641437,11.5186136 104.468003,12.0377564 105.167806,12.7030756 C105.867609,13.3683948 106.415272,14.1597095 106.810813,15.0770436 C107.206354,15.9943776 107.404121,17.0074621 107.404121,18.1163275 Z M104.422367,18.1163275 C104.422367,17.4308471 104.315877,16.7756183 104.102894,16.1506215 C103.88991,15.5256246 103.580582,14.9762405 103.174899,14.5024526 C102.769216,14.0286647 102.267191,13.6506481 101.668809,13.3683914 C101.070427,13.0861348 100.385847,12.9450086 99.6150496,12.9450086 C98.8442522,12.9450086 98.1596727,13.0861348 97.5612905,13.3683914 C96.9629083,13.6506481 96.4608833,14.0286647 96.0552004,14.5024526 C95.6495176,14.9762405 95.3401891,15.5256246 95.1272056,16.1506215 C94.9142221,16.7756183 94.8077319,17.4308471 94.8077319,18.1163275 C94.8077319,18.8018078 94.9142221,19.4570366 95.1272056,20.0820334 C95.3401891,20.7070303 95.6495176,21.2614546 96.0552004,21.7453231 C96.4608833,22.2291916 96.9629083,22.6122485 97.5612905,22.8945051 C98.1596727,23.1767617 98.8442522,23.3178879 99.6150496,23.3178879 C100.385847,23.3178879 101.070427,23.1767617 101.668809,22.8945051 C102.267191,22.6122485 102.769216,22.2291916 103.174899,21.7453231 C103.580582,21.2614546 103.88991,20.7070303 104.102894,20.0820334 C104.315877,19.4570366 104.422367,18.8018078 104.422367,18.1163275 Z M121.207411,14.6082983 C120.903149,14.144591 120.446763,13.7564939 119.838238,13.4439955 C119.229714,13.1314971 118.580631,12.9752502 117.890971,12.9752502 C117.140457,12.9752502 116.476162,13.1163764 115.898064,13.3986331 C115.319965,13.6808897 114.828082,14.0589063 114.4224,14.5326942 C114.016717,15.0064821 113.707388,15.5558663 113.494405,16.1808631 C113.281421,16.8058599 113.174931,17.4610887 113.174931,18.1465691 C113.174931,18.8320495 113.281421,19.4872783 113.494405,20.1122751 C113.707388,20.7372719 114.016717,21.286656 114.4224,21.7604439 C114.828082,22.2342319 115.325036,22.6122485 115.913277,22.8945051 C116.501517,23.1767617 117.170883,23.3178879 117.921397,23.3178879 C118.651626,23.3178879 119.315921,23.1767617 119.914304,22.8945051 C120.512686,22.6122485 121.004569,22.2291916 121.389968,21.7453231 L123.306809,23.4690961 C122.698285,24.1747377 121.937641,24.7241218 121.024855,25.1172649 C120.112068,25.5104081 119.077593,25.7069767 117.921397,25.7069767 C116.805769,25.7069767 115.776364,25.5255288 114.833151,25.1626274 C113.889939,24.799726 113.073514,24.2906637 112.383853,23.635425 C111.694193,22.9801864 111.1516,22.1888717 110.756059,21.261457 C110.360518,20.3340424 110.162751,19.2957568 110.162751,18.1465691 C110.162751,17.0175426 110.355447,15.9893374 110.740846,15.0619228 C111.126245,14.1345081 111.663767,13.3381531 112.353427,12.6728339 C113.043088,12.0075147 113.859513,11.4934122 114.802725,11.1305108 C115.745938,10.7676094 116.765201,10.5861614 117.860544,10.5861614 C118.874752,10.5861614 119.883873,10.7877703 120.887938,11.190994 C121.892003,11.5942178 122.688143,12.1788835 123.276383,12.9450086 L121.207411,14.6082983 Z M128.803785,17.2090785 L128.895063,17.2090785 L134.949849,10.9793026 L138.783533,10.9793026 L132.028947,17.4812532 L139.361628,25.3138355 L135.40624,25.3138355 L128.895063,17.8743944 L128.803785,17.8743944 L128.803785,25.3138355 L125.943735,25.3138355 L125.943735,2.45116279 L128.803785,2.45116279 L128.803785,17.2090785 Z"
			className="transparent"
			fill-rule="nonzero"
		/>
		<Path
			d="M148.271323,25.3987672 L145.190683,25.3987672 L139.361628,11.0109835 L142.502673,11.0109835 L146.7008,22.3330158 L146.761205,22.3330158 L150.989535,11.0109835 L154.00977,11.0109835 L148.271323,25.3987672 Z M159.375722,25.3987672 L156.536701,25.3987672 L156.536701,11.0109835 L159.375722,11.0109835 L159.375722,25.3987672 Z M159.85896,5.82045391 C159.85896,6.34659209 159.672714,6.78166137 159.300216,7.12567479 C158.927719,7.46968822 158.479722,7.64169235 157.956212,7.64169235 C157.432702,7.64169235 156.989738,7.46462927 156.627308,7.11049781 C156.264878,6.75636634 156.083666,6.32635601 156.083666,5.82045391 C156.083666,5.29431573 156.264878,4.85418751 156.627308,4.50005604 C156.989738,4.14592457 157.432702,3.96886149 157.956212,3.96886149 C158.479722,3.96886149 158.927719,4.14592457 159.300216,4.50005604 C159.672714,4.85418751 159.85896,5.29431573 159.85896,5.82045391 Z M171.809025,14.6534604 C171.486865,14.1273222 171.033835,13.6973118 170.449919,13.3634165 C169.866004,13.0295211 169.211626,12.8625759 168.486766,12.8625759 C168.164606,12.8625759 167.842451,12.8979885 167.520291,12.9688148 C167.198131,13.0396411 166.911211,13.1509379 166.659524,13.3027085 C166.407836,13.4544791 166.206489,13.6467191 166.055477,13.879434 C165.904464,14.112149 165.828959,14.4005088 165.828959,14.7445223 C165.828959,15.3516048 166.100778,15.8018509 166.644423,16.0952741 C167.188068,16.3886973 168.003523,16.6568214 169.090813,16.8996544 C169.775404,17.0615431 170.409647,17.253783 170.993562,17.4763799 C171.577477,17.6989769 172.085878,17.9772188 172.518781,18.3111142 C172.951683,18.6450096 173.28894,19.0446663 173.53056,19.5100962 C173.77218,19.9755261 173.892988,20.5218922 173.892988,21.1492108 C173.892988,21.9991263 173.73191,22.7174965 173.40975,23.304343 C173.08759,23.8911894 172.659728,24.3717892 172.12615,24.7461567 C171.592573,25.1205243 170.983498,25.3886484 170.298908,25.550537 C169.614318,25.7124257 168.909603,25.7933688 168.184743,25.7933688 C167.097453,25.7933688 166.035347,25.5808931 164.998394,25.1559354 C163.961442,24.7309776 163.100683,24.0834326 162.416093,23.213281 L164.439651,21.4831045 C164.822216,22.0497149 165.350752,22.5252557 166.025274,22.9097413 C166.699797,23.2942269 167.439747,23.4864668 168.245147,23.4864668 C168.607578,23.4864668 168.954901,23.4510542 169.287129,23.3802279 C169.619356,23.3094016 169.921377,23.1930459 170.193199,23.0311572 C170.465022,22.8692685 170.68147,22.6567928 170.84255,22.3937237 C171.00363,22.1306546 171.084169,21.7967643 171.084169,21.3920426 C171.084169,20.7242518 170.767047,20.2284752 170.132795,19.9046979 C169.498542,19.5809205 168.567312,19.2773838 167.339077,18.9940786 C166.855837,18.8726621 166.36757,18.7259527 165.874263,18.553946 C165.380955,18.3819393 164.932958,18.1441689 164.530258,17.8406276 C164.127558,17.5370864 163.800369,17.1576655 163.548681,16.7023536 C163.296994,16.2470417 163.171152,15.6854988 163.171152,15.017708 C163.171152,14.2487369 163.327196,13.586015 163.639288,13.0295227 C163.951381,12.4730304 164.359109,12.0177254 164.862484,11.6635939 C165.365859,11.3094624 165.939698,11.0463973 166.584018,10.8743906 C167.228338,10.7023839 167.892783,10.6163818 168.577373,10.6163818 C169.604259,10.6163818 170.595893,10.8187396 171.552305,11.2234613 C172.508718,11.628183 173.248668,12.2150206 173.772179,12.9839918 L171.809025,14.6534604 Z M180.104606,25.3987672 L177.265584,25.3987672 L177.265584,11.0109835 L180.104606,11.0109835 L180.104606,25.3987672 Z M180.587844,5.82045391 C180.587844,6.34659209 180.401598,6.78166137 180.0291,7.12567479 C179.656602,7.46968822 179.208605,7.64169235 178.685095,7.64169235 C178.161585,7.64169235 177.718622,7.46462927 177.356191,7.11049781 C176.993761,6.75636634 176.812549,6.32635601 176.812549,5.82045391 C176.812549,5.29431573 176.993761,4.85418751 177.356191,4.50005604 C177.718622,4.14592457 178.161585,3.96886149 178.685095,3.96886149 C179.208605,3.96886149 179.656602,4.14592457 180.0291,4.50005604 C180.401598,4.85418751 180.587844,5.29431573 180.587844,5.82045391 Z M187.614925,23.1222191 L187.614925,25.3987672 L184.866511,25.3987672 L184.866511,2.45116279 L187.705532,2.45116279 L187.705532,13.1661156 L187.796139,13.1661156 C188.279379,12.4578527 188.953892,11.8558382 189.819697,11.3600542 C190.685502,10.8642701 191.712372,10.6163818 192.900337,10.6163818 C193.967492,10.6163818 194.938992,10.8086217 195.814865,11.1931073 C196.690737,11.5775929 197.445789,12.1138411 198.080041,12.8018679 C198.714294,13.4898948 199.20256,14.2942671 199.544856,15.2150089 C199.887151,16.1357507 200.058296,17.122245 200.058296,18.1745213 C200.058296,19.2267977 199.887151,20.2183509 199.544856,21.1492108 C199.20256,22.0800707 198.719328,22.8895019 198.095142,23.5775287 C197.470957,24.2655556 196.715906,24.8068627 195.829966,25.2014663 C194.944026,25.59607 193.947358,25.7933688 192.839933,25.7933688 C191.813047,25.7933688 190.836514,25.5657163 189.910304,25.1104044 C188.984094,24.6550925 188.23911,23.9923707 187.67533,23.1222191 L187.614925,23.1222191 Z M197.128667,18.1745213 C197.128667,17.5067306 197.027994,16.8591856 196.826644,16.231867 C196.625293,15.6045484 196.323273,15.0480644 195.920573,14.5623984 C195.517873,14.0767324 195.019539,13.6922526 194.425556,13.4089474 C193.831574,13.1256422 193.14196,12.9839918 192.356695,12.9839918 C191.631835,12.9839918 190.972423,13.1256422 190.378441,13.4089474 C189.784458,13.6922526 189.276057,14.0767324 188.853222,14.5623984 C188.430386,15.0480644 188.103198,15.6045484 187.871645,16.231867 C187.640092,16.8591856 187.524318,17.5168485 187.524318,18.2048753 C187.524318,18.8929022 187.640092,19.550565 187.871645,20.1778836 C188.103198,20.8052022 188.430386,21.3566272 188.853222,21.8321752 C189.276057,22.3077232 189.784458,22.6871441 190.378441,22.9704492 C190.972423,23.2537544 191.631835,23.3954049 192.356695,23.3954049 C193.14196,23.3954049 193.831574,23.2486955 194.425556,22.9552723 C195.019539,22.661849 195.517873,22.2723103 195.920573,21.7866443 C196.323273,21.3009782 196.625293,20.7444943 196.826644,20.1171757 C197.027994,19.4898571 197.128667,18.8423121 197.128667,18.1745213 Z M206.632342,25.3987672 L203.79332,25.3987672 L203.79332,11.0109835 L206.632342,11.0109835 L206.632342,25.3987672 Z M207.115579,5.82045391 C207.115579,6.34659209 206.929333,6.78166137 206.556836,7.12567479 C206.184338,7.46968822 205.736341,7.64169235 205.212831,7.64169235 C204.689321,7.64169235 204.246357,7.46462927 203.883927,7.11049781 C203.521497,6.75636634 203.340285,6.32635601 203.340285,5.82045391 C203.340285,5.29431573 203.521497,4.85418751 203.883927,4.50005604 C204.246357,4.14592457 204.689321,3.96886149 205.212831,3.96886149 C205.736341,3.96886149 206.184338,4.14592457 206.556836,4.50005604 C206.929333,4.85418751 207.115579,5.29431573 207.115579,5.82045391 Z M214.233268,25.3987672 L211.394246,25.3987672 L211.394246,2.45116279 L214.233268,2.45116279 L214.233268,25.3987672 Z M221.803992,25.3987672 L218.96497,25.3987672 L218.96497,11.0109835 L221.803992,11.0109835 L221.803992,25.3987672 Z M222.287229,5.82045391 C222.287229,6.34659209 222.100983,6.78166137 221.728486,7.12567479 C221.355988,7.46968822 220.907991,7.64169235 220.384481,7.64169235 C219.860971,7.64169235 219.418007,7.46462927 219.055577,7.11049781 C218.693147,6.75636634 218.511935,6.32635601 218.511935,5.82045391 C218.511935,5.29431573 218.693147,4.85418751 219.055577,4.50005604 C219.418007,4.14592457 219.860971,3.96886149 220.384481,3.96886149 C220.907991,3.96886149 221.355988,4.14592457 221.728486,4.50005604 C222.100983,4.85418751 222.287229,5.29431573 222.287229,5.82045391 Z M233.512438,13.3482395 L229.706942,13.3482395 L229.706942,20.8456711 C229.706942,21.7158227 229.868019,22.3380729 230.190179,22.7124405 C230.512339,23.086808 231.025774,23.273989 231.730499,23.273989 C231.992254,23.273989 232.27414,23.2436353 232.576165,23.1829271 C232.87819,23.1222188 233.150009,23.0311578 233.391629,22.9097413 L233.482236,25.2469973 C233.139941,25.3684138 232.762415,25.4645338 232.349648,25.53536 C231.93688,25.6061863 231.509018,25.641599 231.066048,25.641599 C229.717002,25.641599 228.685099,25.267237 227.970306,24.5185019 C227.255513,23.7697668 226.898122,22.646681 226.898122,21.1492108 L226.898122,13.3482395 L224.149708,13.3482395 L224.149708,11.0109835 L226.898122,11.0109835 L226.898122,6.882843 L229.706942,6.882843 L229.706942,11.0109835 L233.512438,11.0109835 L233.512438,13.3482395 Z M241.626805,22.3026618 L241.687209,22.3026618 L245.643718,11.0109835 L248.663953,11.0109835 L241.717412,28.7984123 C241.475792,29.4054948 241.21404,29.9468019 240.93215,30.4223499 C240.65026,30.8978978 240.318038,31.3026134 239.935473,31.6365088 C239.552908,31.9704042 239.10491,32.2284104 238.591468,32.4105352 C238.078025,32.5926599 237.46895,32.6837209 236.764225,32.6837209 C236.4622,32.6837209 236.155146,32.6685441 235.843053,32.63819 C235.530961,32.6078358 235.213839,32.5521874 234.891679,32.4712431 L235.1635,29.9518633 C235.646741,30.1137519 236.119906,30.1946951 236.583011,30.1946951 C237.328006,30.1946951 237.881711,29.9872783 238.244141,29.5724386 C238.606571,29.1575989 238.938793,28.5657023 239.240818,27.7967311 L240.146889,25.3987672 L234.015811,11.0109835 L237.187058,11.0109835 L241.626805,22.3026618 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M25.5813953,0 C37.2093023,0 47.1395349,7.23255814 51.1627907,17.4418605 C47.1395349,27.6511628 37.2093023,34.8837209 25.5813953,34.8837209 C13.9534884,34.8837209 4.02325581,27.6511628 0,17.4418605 C4.02325581,7.23255814 13.9534884,0 25.5813953,0 Z M25.5813953,29.0697674 C32.003311,29.0697674 37.2093023,23.8637762 37.2093023,17.4418605 C37.2093023,11.0199448 32.003311,5.81395349 25.5813953,5.81395349 C19.1594797,5.81395349 13.9534884,11.0199448 13.9534884,17.4418605 C13.9534884,23.8637762 19.1594797,29.0697674 25.5813953,29.0697674 Z"
			fill-rule="nonzero"
		/>
		<circle
			className="transparent"
			cx="27.9069767"
			cy="15.1162791"
			r="5.81395349"
		></circle>
	</SVG>
);
icons.error = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.errorOutline = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.warning = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M1,21 L23,21 L12,2 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.image = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" />
	</SVG>
);
icons.replaceImage = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		width="20"
		height="20"
	>
		<rect x="11" y="3" width="7" height="5" rx="1"></rect>
		<rect x="2" y="12" width="7" height="5" rx="1"></rect>
		<Path d="M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z" />
		<Path d="M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z" />
	</SVG>
);
icons.link = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z" />
	</SVG>
);
icons.help = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M2,12 C2,6.48 6.48,2 12,2 C17.52,2 22,6.48 22,12 C22,17.52 17.52,22 12,22 C6.48,22 2,17.52 2,12 Z M12,20 C16.41,20 20,16.41 20,12 C20,7.59001 16.41,4.00002 12,4.00002 C7.59,4.00002 4,7.59001 4,12 C4,16.41 7.59,20 12,20 Z" />
		<polygon points="13 16 13 18 11 18 11 16"></polygon>
		<Path d="M8,10 C8,7.79 9.79,6 12,6 C14.21,6 16,7.79 16,10 C16,11.28291 15.21,11.97331 14.4408,12.6455 C13.711,13.2833 13,13.9046 13,15 L11,15 C11,13.1787 11.94212,12.4566 12.7704,11.82167 C13.4202,11.3236 14,10.87921 14,10 C14,8.9 13.1,8 12,8 C10.9,8 10,8.9 10,10 L8,10 Z" />
	</SVG>
);
icons.star = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<polygon points="12 17.7371778 5.81966011 21.5 7.49246652 14.4659011 2 9.75735421 9.2141911 9.1728642 12 2.5 14.7858089 9.1728642 22 9.75735421 16.5075335 14.4659011 18.1803399 21.5"></polygon>
	</SVG>
);
icons.cloud = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24">
		<Path d="M18.3529412,9.83333333 C20.4705882,10.0666667 22,11.8166667 22,13.9166667 C22,16.1333333 20.1176471,18 17.8823529,18 L6.11764706,18 C3.88235294,18 2,16.1333333 2,13.9166667 C2,11.8166667 3.52941176,10.1833333 5.64705882,9.83333333 C5.52941176,9.71666667 5.52941176,9.48333333 5.52941176,9.25 C5.52941176,7.61666667 6.82352941,6.33333333 8.47058824,6.33333333 C8.82352941,6.33333333 9.29411765,6.45 9.52941176,6.56666667 C10.3529412,5.05 11.8823529,4 13.7647059,4 C16.3529412,4 18.4705882,6.1 18.4705882,8.66666667 C18.4705882,9.13333333 18.3529412,9.48333333 18.3529412,9.83333333 Z" />
	</SVG>
);
icons.visibility = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M12,5 C17,5 21.27,8.11 23,12.5 C21.27,16.89 17,20 12,20 C7,20 2.73,16.89 1,12.5 C2.73,8.11 7,5 12,5 Z M12,17.5 C14.76,17.5 17,15.26 17,12.5 C17,9.74 14.76,7.5 12,7.5 C9.24,7.5 7,9.74 7,12.5 C7,15.26 9.24,17.5 12,17.5 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,9.5 C10.34,9.5 9,10.84 9,12.5 C9,14.16 10.34,15.5 12,15.5 C13.66,15.5 15,14.16 15,12.5 C15,10.84 13.66,9.5 12,9.5 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.visibilityHidden = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M19.1145976,17.6145976 C17.1357397,19.111758 14.6721169,20 12,20 C7,20 2.73,16.89 1,12.5 C2.1681438,9.53575071 4.49435577,7.15509483 7.42141271,5.92141271 L9.60854669,8.10854669 C8.05477185,8.95699413 7,10.6060682 7,12.5 C7,15.26 9.24,17.5 12,17.5 C13.8939318,17.5 15.5430059,16.4452281 16.3914533,14.8914533 L19.1145976,17.6145976 L19.1145976,17.6145976 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M20.6043865,16.2759593 L16.9972006,12.6687735 C16.9990619,12.6127432 17,12.5564805 17,12.5 C17,9.74 14.76,7.5 12,7.5 C11.9435195,7.5 11.8872568,7.50093805 11.8312265,7.50279942 L9.57740803,5.2489809 C10.3592736,5.08578831 11.1695684,5 12,5 C17,5 21.27,8.11 23,12.5 C22.4438856,13.9111805 21.6253071,15.1900957 20.6043865,16.2759593 L20.6043865,16.2759593 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M13.6675474,14.9959745 C13.1910334,15.314476 12.6176688,15.5 12,15.5 C10.34,15.5 9,14.16 9,12.5 C9,11.8823312 9.18552396,11.3089666 9.50402547,10.8324526 L2.66116524,3.98959236 C2.27064094,3.59906807 2.27064094,2.96590309 2.66116524,2.5753788 C3.05168953,2.18485451 3.68485451,2.18485451 4.0753788,2.5753788 L21.0459415,19.5459415 C21.4364658,19.9364658 21.4364658,20.5696308 21.0459415,20.9601551 C20.6554173,21.3506794 20.0222523,21.3506794 19.631728,20.9601551 L13.6675474,14.9959745 L13.6675474,14.9959745 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);

export default icons;
