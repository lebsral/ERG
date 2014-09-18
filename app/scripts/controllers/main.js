'use strict';

/**
 * @ngdoc function
 * @name ergApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ergApp
 */
angular.module('ergApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.chemicals = [
	  {
	    Name: 'AC',
	    GuideNum: 117,
	    IdNum: 1051,
	    CWA: true,
	  },
	  {
	    Name: 'Acetal',
	    GuideNum: 127,
	    IdNum: 1088,
	  },
	  {
	    Name: 'Acetaldehyde',
	    GuideNum: 129,
	    IdNum: 1089,
	  },
	  {
	    Name: 'Acetaldehyde ammonia',
	    GuideNum: 171,
	    IdNum: 1841,
	  },
	  {
	    Name: 'Acetaldehyde oxime',
	    GuideNum: 129,
	    IdNum: 2332,
	  },
	  {
	    Name: 'Acetic acid, glacial',
	    GuideNum: 132,
	    IdNum: 2789,
	  },
	  {
	    Name: 'Acetic acid, solution, more than 10% but not more than 80% acid',
	    GuideNum: 153,
	    IdNum: 2790,
	  },
	  {
	    Name: 'Acetic acid, solution, more than 80% acid',
	    GuideNum: 132,
	    IdNum: 2789,
	  },
	  {
	    Name: 'Acetic anhydride',
	    GuideNum: 137,
	    IdNum: 1715,
	  },
	  {
	    Name: 'Acetone',
	    GuideNum: 127,
	    IdNum: 1090,
	  },
	  {
	    Name: 'Acetone cyanohydrin, stabilized',
	    GuideNum: 155,
	    IdNum: 1541,
	    WRM: true,
	  },
	  {
	    Name: 'Acetone oils',
	    GuideNum: 127,
	    IdNum: 1091,
	  },
	  {
	    Name: 'Acetonitrile',
	    GuideNum: 127,
	    IdNum: 1648,
	  },
	  {
	    Name: 'Acetyl bromide',
	    GuideNum: 156,
	    IdNum: 1716,
	    WRM: true,
	  },
	  {
	    Name: 'Acetyl chloride',
	    GuideNum: 155,
	    IdNum: 1717,
	    WRM: true,
	  },
	  {
	    Name: 'Acetylene',
	    GuideNum: 116,
	    IdNum: 1001,
	  },
	  {
	    Name: 'Acetylene, dissolved',
	    GuideNum: 116,
	    IdNum: 1001,
	  },
	  {
	    Name: 'Acetylene, solvent free',
	    GuideNum: 116,
	    IdNum: 3374,
	  },
	  {
	    Name: 'Acetylene, Ethylene and Propylene in mixture, refrigerated liquid containing at least 71.5% Ethylene with not more than 22.5% Acetylene and not more than 6% Propylene.',
	    GuideNum: 115,
	    IdNum: 3138,
	  },
	  {
	    Name: 'Acetylene tetrabromide',
	    GuideNum: 159,
	    IdNum: 2504,
	  },
	  {
	    Name: 'Acetyl iodide',
	    GuideNum: 156,
	    IdNum: 1898,
	    WRM: true,
	  },
	  {
	    Name: 'Acetyl methyl carbinol',
	    GuideNum: 127,
	    IdNum: 2621,
	  },
	  {
	    Name: 'Acid, sludge',
	    GuideNum: 153,
	    IdNum: 1906,
	  },
	  {
	    Name: 'Acid butyl phosphate',
	    GuideNum: 153,
	    IdNum: 1718,
	  },
	  {
	    Name: 'Acridine',
	    GuideNum: 153,
	    IdNum: 2713,
	  },
	  {
	    Name: 'Acrolein, stabilized',
	    GuideNum: '131.html?id=id139&mnid=mnid144\'>131P</a>',
	    IdNum: 1092,
	    TIH: true,
	  },
	  {
	    Name: 'Acrolein dimer, stabilized',
	    GuideNum: 129,
	    Poly: true,
	    IdNum: 2607,
	  },
	  {
	    Name: 'Acrylamide',
	    GuideNum: 153,
	    Poly: true,
	    IdNum: 2074,
	  },
	  {
	    Name: 'Acrylamide, solid',
	    GuideNum: 153,
	    Poly: true,
	    IdNum: 2074,
	  },
	  {
	    Name: 'Acrylamide, solution',
	    GuideNum: 153,
	    Poly: true,
	    IdNum: 3426,
	  },
	  {
	    Name: 'Acrylic acid, stabilized',
	    GuideNum: 132,
	    Poly: true,
	    IdNum: 2218,
	  },
	  {
	    Name: 'Acrylonitrile, stabilized',
	    GuideNum: 131,
	    Poly: true,
	    IdNum: 1093,
	  },
	  {
	    Name: 'Adamsite',
	    GuideNum: 154,
	    IdNum: 1698,
	    CWA: true,
	  },
	  {
	    Name: 'Adhesives (flammable)',
	    GuideNum: 128,
	    IdNum: 1133,
	  },
	  {
	    Name: 'Adiponitrile',
	    GuideNum: 153,
	    IdNum: 2205,
	  },
	  {
	    Name: 'Aerosol dispensers',
	    GuideNum: 126,
	    IdNum: 1950,
	  },
	  {
	    Name: 'Aerosols',
	    GuideNum: 126,
	    IdNum: 1950,
	  },
	  {
	    Name: 'Air, compressed',
	    GuideNum: 122,
	    IdNum: 1002,
	  },
	  {
	    Name: 'Air, refrigerated liquid (cryogenic liquid)',
	    GuideNum: 122,
	    IdNum: 1003,
	  },
	  {
	    Name: 'Air, refrigerated liquid (cryogenic liquid), non-pressurized',
	    GuideNum: 122,
	    IdNum: 1003,
	  },
	  {
	    Name: 'Air bag inflators',
	    GuideNum: 171,
	    IdNum: 3268,
	  },
	  {
	    Name: 'Air bag inflators, compressed gas',
	    GuideNum: 126,
	    IdNum: 3353,
	  },
	  {
	    Name: 'Air bag inflators, pyrotechnic',
	    GuideNum: 171,
	    IdNum: 3268,
	  },
	  {
	    Name: 'Air bag modules',
	    GuideNum: 171,
	    IdNum: 3268,
	  },
	  {
	    Name: 'Air bag modules, compressed gas',
	    GuideNum: 126,
	    IdNum: 3353,
	  },
	  {
	    Name: 'Air bag modules, pyrotechnic',
	    GuideNum: 171,
	    IdNum: 3268,
	  },
	  {
	    Name: 'Aircraft hydraulic power unit fuel tank',
	    GuideNum: 131,
	    IdNum: 3165,
	  },
	  {
	    Name: 'Alcoholates solution, n.o.s., in alcohol',
	    GuideNum: 132,
	    IdNum: 3274,
	  },
	  {
	    Name: 'Alcoholic beverages',
	    GuideNum: 127,
	    IdNum: 3065,
	  },
	  {
	    Name: 'Alcohols, flammable, poisonous, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1986,
	  },
	  {
	    Name: 'Alcohols, flammable, toxic, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1986,
	  },
	  {
	    Name: 'Alcohols, n.o.s.',
	    GuideNum: 127,
	    IdNum: 1987,
	  },
	  {
	    Name: 'Alcohols, poisonous, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1986,
	  },
	  {
	    Name: 'Alcohols, toxic, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1986,
	  },
	  {
	    Name: 'Aldehydes, flammable, poisonous, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1988,
	  },
	  {
	    Name: 'Aldehydes, flammable, toxic, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1988,
	  },
	  {
	    Name: 'Aldehydes, n.o.s.',
	    GuideNum: 129,
	    IdNum: 1989,
	  },
	  {
	    Name: 'Aldehydes, poisonous, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1988,
	  },
	  {
	    Name: 'Aldehydes, toxic, n.o.s.',
	    GuideNum: 131,
	    IdNum: 1988,
	  },
	  {
	    Name: 'Aldol',
	    GuideNum: 153,
	    IdNum: 2839,
	  },
	  {
	    Name: 'Alkali metal alcoholates, self-heating, corrosive, n.o.s.',
	    GuideNum: 136,
	    IdNum: 3206,
	  },
	  {
	    Name: 'Alkali metal alloy, liquid, n.o.s.',
	    GuideNum: 138,
	    IdNum: 1421,
	  },
	  {
	    Name: 'Alkali metal amalgam',
	    GuideNum: 138,
	    IdNum: 1389,
	  },
	  {
	    Name: 'Alkali metal amalgam, liquid',
	    GuideNum: 138,
	    IdNum: 1389,
	  },
	  {
	    Name: 'Alkali metal amalgam, solid',
	    GuideNum: 138,
	    IdNum: 1389,
	  },
	  {
	    Name: 'Alkali metal amalgam, solid',
	    GuideNum: 138,
	    IdNum: 3401,
	  },
	  {
	    Name: 'Alkali metal amides',
	    GuideNum: 139,
	    IdNum: 1390,
	  },
	  {
	    Name: 'Alkali metal dispersion',
	    GuideNum: 138,
	    IdNum: 1391,
	  },
	  {
	    Name: 'Alkali metal dispersion, flammable',
	    GuideNum: 138,
	    IdNum: 3482,
	  },
	  {
	    Name: 'Alkaline earth metal alcoholates, n.o.s.',
	    GuideNum: 135,
	    IdNum: 3205,
	  },
	  {
	    Name: 'Alkaline earth metal alloy, n.o.s.',
	    GuideNum: 138,
	    IdNum: 1393,
	  },
	  {
	    Name: 'Alkaline earth metal amalgam',
	    GuideNum: 138,
	    IdNum: 1392,
	  },
	  {
	    Name: 'Alkaline earth metal amalgam, liquid',
	    GuideNum: 138,
	    IdNum: 1392,
	  },
	  {
	    Name: 'Alkaline earth metal amalgam, solid',
	    GuideNum: 138,
	    IdNum: 3402,
	  },
	  {
	    Name: 'Alkaline earth metal dispersion',
	    GuideNum: 138,
	    IdNum: 1391,
	  },
	  {
	    Name: 'Alkaline earth metal dispersion, flammable',
	    GuideNum: 138,
	    IdNum: 3482,
	  },
	  {
	    Name: 'Alkaloids, liquid, n.o.s. (poisonous)',
	    GuideNum: 151,
	    IdNum: 3140,
	  },
	  {
	    Name: 'Alkaloids, solid, n.o.s. (poisonous)',
	    GuideNum: 151,
	    IdNum: 1544,
	  },
	  {
	    Name: 'Alkaloid salts, liquid, n.o.s. (poisonous)',
	    GuideNum: 151,
	    IdNum: 3140,
	  },
	  {
	    Name: 'Alkaloid salts, solid, n.o.s. (poisonous)',
	    GuideNum: 151,
	    IdNum: 1544,
	  },
	  {
	    Name: 'Alkylamines, n.o.s.',
	    GuideNum: 132,
	    IdNum: 2733,
	  },
	  {
	    Name: 'Alkylamines, n.o.s.',
	    GuideNum: 132,
	    IdNum: 2734,
	  },
	  {
	    Name: 'Alkylamines, n.o.s.',
	    GuideNum: 153,
	    IdNum: 2735,
	  },
	  {
	    Name: 'Alkyl phenols, liquid, n.o.s. (including C2-C12 homologues)',
	    GuideNum: 153,
	    IdNum: 3145,
	  },
	  {
	    Name: 'Alkyl phenols, solid, n.o.s. (including C2-C12 homologues)',
	    GuideNum: 153,
	    IdNum: 2430,
	  },
	  {
	    Name: 'Alkyl sulfonic acids, liquid, with more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2584,
	  },
	  {
	    Name: 'Alkyl sulfonic acids, liquid, with not more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2586,
	  },
	  {
	    Name: 'Alkyl sulfonic acids, solid, with more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2583,
	  },
	  {
	    Name: 'Alkyl sulfonic acids, solid, with not more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2585,
	  },
	  {
	    Name: 'Alkylsulfuric acids',
	    GuideNum: 156,
	    IdNum: 2571,
	  },
	  {
	    Name: 'Alkyl sulphonic acids, liquid, with more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2584,
	  },
	  {
	    Name: 'Alkyl sulphonic acids, liquid, with not more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2586,
	  },
	  {
	    Name: 'Alkyl sulphonic acids, solid, with more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2583,
	  },
	  {
	    Name: 'Alkyl sulphonic acids, solid, with not more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2585,
	  },
	  {
	    Name: 'Alkylsulphuric acids',
	    GuideNum: 156,
	    IdNum: 2571,
	  },
	  {
	    Name: 'Allyl acetate',
	    GuideNum: 131,
	    IdNum: 2333,
	  },
	  {
	    Name: 'Allyl alcohol',
	    GuideNum: 131,
	    IdNum: 1098,
	    TIH: true,
	  },
	  {
	    Name: 'Allylamine',
	    GuideNum: 131,
	    IdNum: 2334,
	    TIH: true,
	  },
	  {
	    Name: 'Allyl bromide',
	    GuideNum: 131,
	    IdNum: 1099,
	  },
	  {
	    Name: 'Allyl chloride',
	    GuideNum: 131,
	    IdNum: 1100,
	  },
	  {
	    Name: 'Allyl chlorocarbonate',
	    GuideNum: 155,
	    IdNum: 1722,
	    TIH: true,
	  },
	  {
	    Name: 'Allyl chloroformate',
	    GuideNum: 155,
	    IdNum: 1722,
	    TIH: true,
	  },
	  {
	    Name: 'Allyl ethyl ether',
	    GuideNum: 131,
	    IdNum: 2335,
	  },
	  {
	    Name: 'Allyl formate',
	    GuideNum: 131,
	    IdNum: 2336,
	  },
	  {
	    Name: 'Allyl glycidyl ether',
	    GuideNum: 129,
	    IdNum: 2219,
	  },
	  {
	    Name: 'Allyl iodide',
	    GuideNum: 132,
	    IdNum: 1723,
	  },
	  {
	    Name: 'Allyl isothiocyanate, stabilized',
	    GuideNum: 155,
	    IdNum: 1545,
	  },
	  {
	    Name: 'Allyltrichlorosilane, stabilized',
	    GuideNum: 155,
	    IdNum: 1724,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum, molten',
	    GuideNum: 169,
	    IdNum: 9260,
	  },
	  {
	    Name: 'Aluminum alkyl halides',
	    GuideNum: 135,
	    IdNum: 3052,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum alkyl halides, liquid',
	    GuideNum: 135,
	    IdNum: 3052,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum alkyl halides, solid',
	    GuideNum: 135,
	    IdNum: 3052,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum alkyl halides, solid',
	    GuideNum: 135,
	    IdNum: 3461,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum alkyl hydrides',
	    GuideNum: 138,
	    IdNum: 3076,
	  },
	  {
	    Name: 'Aluminum alkyls',
	    GuideNum: 135,
	    IdNum: 3051,
	  },
	  {
	    Name: 'Aluminum borohydride',
	    GuideNum: 135,
	    IdNum: 2870,
	  },
	  {
	    Name: 'Aluminum borohydride in devices',
	    GuideNum: 135,
	    IdNum: 2870,
	  },
	  {
	    Name: 'Aluminum bromide, anhydrous',
	    GuideNum: 137,
	    IdNum: 1725,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum bromide, solution',
	    GuideNum: 154,
	    IdNum: 2580,
	  },
	  {
	    Name: 'Aluminum carbide',
	    GuideNum: 138,
	    IdNum: 1394,
	  },
	  {
	    Name: 'Aluminum chloride, anhydrous',
	    GuideNum: 137,
	    IdNum: 1726,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum chloride, solution',
	    GuideNum: 154,
	    IdNum: 2581,
	  },
	  {
	    Name: 'Aluminum dross',
	    GuideNum: 138,
	    IdNum: 3170,
	  },
	  {
	    Name: 'Aluminum ferrosilicon powder',
	    GuideNum: 139,
	    IdNum: 1395,
	  },
	  {
	    Name: 'Aluminum hydride',
	    GuideNum: 138,
	    IdNum: 2463,
	  },
	  {
	    Name: 'Aluminum nitrate',
	    GuideNum: 140,
	    IdNum: 1438,
	  },
	  {
	    Name: 'Aluminum phosphide',
	    GuideNum: 139,
	    IdNum: 1397,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum phosphide pesticide',
	    GuideNum: 157,
	    IdNum: 3048,
	    WRM: true,
	  },
	  {
	    Name: 'Aluminum powder, coated',
	    GuideNum: 170,
	    IdNum: 1309,
	  },
	  {
	    Name: 'Aluminum powder, pyrophoric',
	    GuideNum: 135,
	    IdNum: 1383,
	  },
	  {
	    Name: 'Aluminum powder, uncoated',
	    GuideNum: 138,
	    IdNum: 1396,
	  },
	  {
	    Name: 'Aluminum processing by-products',
	    GuideNum: 138,
	    IdNum: 3170,
	  },
	  {
	    Name: 'Aluminum remelting by-products',
	    GuideNum: 138,
	    IdNum: 3170,
	  },
	  {
	    Name: 'Aluminum resinate',
	    GuideNum: 133,
	    IdNum: 2715,
	  },
	  {
	    Name: 'Aluminum silicon powder, uncoated',
	    GuideNum: 138,
	    IdNum: 1398,
	  },
	  {
	    Name: 'Aluminum smelting by-products',
	    GuideNum: 138,
	    IdNum: 3170,
	  },
	  {
	    Name: 'Amines, flammable, corrosive, n.o.s.',
	    GuideNum: 132,
	    IdNum: 2733,
	  },
	  {
	    Name: 'Amines, liquid, corrosive, flammable, n.o.s.',
	    GuideNum: 132,
	    IdNum: 2734,
	  },
	  {
	    Name: 'Amines, liquid, corrosive, n.o.s.',
	    GuideNum: 153,
	    IdNum: 2735,
	  },
	  {
	    Name: 'Amines, solid, corrosive, n.o.s.',
	    GuideNum: 154,
	    IdNum: 3259,
	  },
	  {
	    Name: '2-Amino-4-chlorophenol',
	    GuideNum: 151,
	    IdNum: 2673,
	  },
	  {
	    Name: '2-Amino-5-diethylaminopentane',
	    GuideNum: 153,
	    IdNum: 2946,
	  },
	  {
	    Name: '2-Amino-4,6-dinitrophenol, wetted with not less than 20% water',
	    GuideNum: 113,
	    IdNum: 3317,
	  },
	  {
	    Name: '2-(2-Aminoethoxy)ethanol',
	    GuideNum: 154,
	    IdNum: 3055,
	  },
	  {
	    Name: 'N-Aminoethylpiperazine',
	    GuideNum: 153,
	    IdNum: 2815,
	  },
	  {
	    Name: 'Aminophenols',
	    GuideNum: 152,
	    IdNum: 2512,
	  },
	  {
	    Name: 'Aminopyridines',
	    GuideNum: 153,
	    IdNum: 2671,
	  },
	  {
	    Name: 'Ammonia, anhydrous',
	    GuideNum: 125,
	    IdNum: 1005,
	    TIH: true,
	  },
	  {
	    Name: 'Ammonia, solution, with more than 10% but not more than 35% Ammonia',
	    GuideNum: 154,
	    IdNum: 2672,
	  },
	  {
	    Name: 'Ammonia, solution, with more than 35% but not more than 50% Ammonia',
	    GuideNum: 125,
	    IdNum: 2073,
	  },
	  {
	    Name: 'Ammonia solution, with more than 50% Ammonia',
	    GuideNum: 125,
	    IdNum: 3318,
	    TIH: true,
	  },
	  {
	    Name: 'Ammonium arsenate',
	    GuideNum: 151,
	    IdNum: 1546,
	  },
	  {
	    Name: 'Ammonium bifluoride, solid',
	    GuideNum: 154,
	    IdNum: 1727,
	  },
	  {
	    Name: 'Ammonium bifluoride, solution',
	    GuideNum: 154,
	    IdNum: 2817,
	  },
	  {
	    Name: 'Ammonium dichromate',
	    GuideNum: 141,
	    IdNum: 1439,
	  },
	  {
	    Name: 'Ammonium dinitro-o-cresolate',
	    GuideNum: 141,
	    IdNum: 1843,
	  },
	  {
	    Name: 'Ammonium dinitro-o-cresolate, solid',
	    GuideNum: 141,
	    IdNum: 1843,
	  },
	  {
	    Name: 'Ammonium dinitro-o-cresolate, solution',
	    GuideNum: 141,
	    IdNum: 3424,
	  },
	  {
	    Name: 'Ammonium fluoride',
	    GuideNum: 154,
	    IdNum: 2505,
	  },
	  {
	    Name: 'Ammonium fluorosilicate',
	    GuideNum: 151,
	    IdNum: 2854,
	  },
	  {
	    Name: 'Ammonium hydrogendifluoride, solid',
	    GuideNum: 154,
	    IdNum: 1727,
	  },
	  {
	    Name: 'Ammonium hydrogendifluoride, solution',
	    GuideNum: 154,
	    IdNum: 2817,
	  },
	  {
	    Name: 'Ammonium hydrogen fluoride, solid',
	    GuideNum: 154,
	    IdNum: 1727,
	  },
	  {
	    Name: 'Ammonium hydrogen fluoride, solution',
	    GuideNum: 154,
	    IdNum: 2817,
	  },
	  {
	    Name: 'Ammonium hydrogen sulfate',
	    GuideNum: 154,
	    IdNum: 2506,
	  },
	  {
	    Name: 'Ammonium hydrogen sulphate',
	    GuideNum: 154,
	    IdNum: 2506,
	  },
	  {
	    Name: 'Ammonium hydroxide',
	    GuideNum: 154,
	    IdNum: 2672,
	  },
	  {
	    Name: 'Ammonium hydroxide, with more than 10% but not more than 35% Ammonia',
	    GuideNum: 154,
	    IdNum: 2672,
	  },
	  {
	    Name: 'Ammonium metavanadate',
	    GuideNum: 154,
	    IdNum: 2859,
	  },
	  {
	    Name: 'Ammonium nitrate, liquid (hot concentrated solution)',
	    GuideNum: 140,
	    IdNum: 2426,
	  },
	  {
	    Name: 'Ammonium nitrate, with not more than 0.2% combustible substances',
	    GuideNum: 140,
	    IdNum: 1942,
	  },
	  {
	    Name: 'Ammonium nitrate emulsion',
	    GuideNum: 140,
	    IdNum: 3375,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizer, n.o.s.',
	    GuideNum: 140,
	    IdNum: 2072,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizer, with not more than 0.4% combustible material',
	    GuideNum: 140,
	    IdNum: 2071,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers',
	    GuideNum: 140,
	    IdNum: 2067,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers',
	    GuideNum: 140,
	    IdNum: 2071,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers',
	    GuideNum: 140,
	    IdNum: 2072,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers, with Ammonium sulfate',
	    GuideNum: 140,
	    IdNum: 2069,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers, with Ammonium sulphate',
	    GuideNum: 140,
	    IdNum: 2069,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers, with Calcium carbonate',
	    GuideNum: 140,
	    IdNum: 2068,
	  },
	  {
	    Name: 'Ammonium nitrate fertilizers, with Phosphate or Potash',
	    GuideNum: 143,
	    IdNum: 2070,
	  },
	  {
	    Name: 'Ammonium nitrate-fuel oil mixtures',
	    GuideNum: 112,
	    IdNum: 'null',
	  },
	  {
	    Name: 'Ammonium nitrate gel',
	    GuideNum: 140,
	    IdNum: 3375,
	  },
	  {
	    Name: 'Ammonium nitrate mixed fertilizers',
	    GuideNum: 140,
	    IdNum: 2069,
	  },
	  {
	    Name: 'Ammonium nitrate suspension',
	    GuideNum: 140,
	    IdNum: 3375,
	  },
	  {
	    Name: 'Ammonium perchlorate',
	    GuideNum: 143,
	    IdNum: 1442,
	  },
	  {
	    Name: 'Ammonium persulfate',
	    GuideNum: 140,
	    IdNum: 1444,
	  },
	  {
	    Name: 'Ammonium persulphate',
	    GuideNum: 140,
	    IdNum: 1444,
	  },
	  {
	    Name: 'Ammonium picrate, wetted with not less than 10% water',
	    GuideNum: 113,
	    IdNum: 1310,
	  },
	  {
	    Name: 'Ammonium polysulfide, solution',
	    GuideNum: 154,
	    IdNum: 2818,
	  },
	  {
	    Name: 'Ammonium polysulphide, solution',
	    GuideNum: 154,
	    IdNum: 2818,
	  },
	  {
	    Name: 'Ammonium polyvanadate',
	    GuideNum: 151,
	    IdNum: 2861,
	  },
	  {
	    Name: 'Ammonium silicofluoride',
	    GuideNum: 151,
	    IdNum: 2854,
	  },
	  {
	    Name: 'Ammonium sulfide, solution',
	    GuideNum: 132,
	    IdNum: 2683,
	  },
	  {
	    Name: 'Ammonium sulphide, solution',
	    GuideNum: 132,
	    IdNum: 2683,
	  },
	  {
	    Name: 'Ammunition, poisonous, non-explosive',
	    GuideNum: 151,
	    IdNum: 2016,
	  },
	  {
	    Name: 'Ammunition, tear-producing, non-explosive',
	    GuideNum: 159,
	    IdNum: 2017,
	  },
	  {
	    Name: 'Ammunition, toxic, non-explosive',
	    GuideNum: 151,
	    IdNum: 2016,
	  },
	  {
	    Name: 'Amyl acetates',
	    GuideNum: 129,
	    IdNum: 1104,
	  },
	  {
	    Name: 'Amyl acid phosphate',
	    GuideNum: 153,
	    IdNum: 2819,
	  },
	  {
	    Name: 'Amyl alcohols',
	    GuideNum: 129,
	    IdNum: 1105,
	  },
	  {
	    Name: 'Amylamines',
	    GuideNum: 132,
	    IdNum: 1106,
	  },
	  {
	    Name: 'Amyl butyrates',
	    GuideNum: 130,
	    IdNum: 2620,
	  },
	  {
	    Name: 'Amyl chloride',
	    GuideNum: 129,
	    IdNum: 1107,
	  },
	  {
	    Name: 'n-Amylene',
	    GuideNum: 128,
	    IdNum: 1108,
	  },
	  {
	    Name: 'Amyl formates',
	    GuideNum: 129,
	    IdNum: 1109,
	  },
	  {
	    Name: 'Amyl mercaptan',
	    GuideNum: 130,
	    IdNum: 1111,
	  },
	  {
	    Name: 'n-Amyl methyl ketone',
	    GuideNum: 127,
	    IdNum: 1110,
	  },
	  {
	    Name: 'Amyl methyl ketone',
	    GuideNum: 127,
	    IdNum: 1110,
	  },
	  {
	    Name: 'Amyl nitrate',
	    GuideNum: 140,
	    IdNum: 1112,
	  },
	  {
	    Name: 'Amyl nitrite',
	    GuideNum: 129,
	    IdNum: 1113,
	  },
	  {
	    Name: 'Amyltrichlorosilane',
	    GuideNum: 155,
	    IdNum: 1728,
	    WRM: true,
	  },
	  {
	    Name: 'Anhydrous ammonia',
	    GuideNum: 125,
	    IdNum: 1005,
	    TIH: true,
	  },
	  {
	    Name: 'Aniline',
	    GuideNum: 153,
	    IdNum: 1547,
	  },
	  {
	    Name: 'Aniline hydrochloride',
	    GuideNum: 153,
	    IdNum: 1548,
	  },
	  {
	    Name: 'Anisidines',
	    GuideNum: 153,
	    IdNum: 2431,
	  },
	  {
	    Name: 'Anisidines, liquid',
	    GuideNum: 153,
	    IdNum: 2431,
	  },
	  {
	    Name: 'Anisidines, solid',
	    GuideNum: 153,
	    IdNum: 2431,
	  },
	  {
	    Name: 'Anisole',
	    GuideNum: 128,
	    IdNum: 2222,
	  },
	  {
	    Name: 'Anisoyl chloride',
	    GuideNum: 156,
	    IdNum: 1729,
	  },
	  {
	    Name: 'Antimony compound, inorganic, liquid, n.o.s.',
	    GuideNum: 157,
	    IdNum: 3141,
	  },
	  {
	    Name: 'Antimony compound, inorganic, n.o.s.',
	    GuideNum: 157,
	    IdNum: 1549,
	  },
	  {
	    Name: 'Antimony compound, inorganic, solid, n.o.s.',
	    GuideNum: 157,
	    IdNum: 1549,
	  },
	  {
	    Name: 'Antimony lactate',
	    GuideNum: 151,
	    IdNum: 1550,
	  },
	  {
	    Name: 'Antimony pentachloride, liquid',
	    GuideNum: 157,
	    IdNum: 1730,
	  },
	  {
	    Name: 'Antimony pentachloride, solution',
	    GuideNum: 157,
	    IdNum: 1731,
	  },
	  {
	    Name: 'Antimony pentafluoride',
	    GuideNum: 157,
	    IdNum: 1732,
	    WRM: true,
	  },
	  {
	    Name: 'Antimony potassium tartrate',
	    GuideNum: 151,
	    IdNum: 1551,
	  },
	  {
	    Name: 'Antimony powder',
	    GuideNum: 170,
	    IdNum: 2871,
	  },
	  {
	    Name: 'Antimony trichloride',
	    GuideNum: 157,
	    IdNum: 1733,
	  },
	  {
	    Name: 'Antimony trichloride, liquid',
	    GuideNum: 157,
	    IdNum: 1733,
	  },
	  {
	    Name: 'Antimony trichloride, solid',
	    GuideNum: 157,
	    IdNum: 1733,
	  },
	  {
	    Name: 'Antimony trichloride, solution',
	    GuideNum: 157,
	    IdNum: 1733,
	  },
	  {
	    Name: 'Aqua regia',
	    GuideNum: 157,
	    IdNum: 1798,
	  },
	  {
	    Name: 'Argon',
	    GuideNum: 121,
	    IdNum: 1006,
	  },
	  {
	    Name: 'Argon, compressed',
	    GuideNum: 121,
	    IdNum: 1006,
	  },
	  {
	    Name: 'Argon, refrigerated liquid  (cryogenic liquid)',
	    GuideNum: 120,
	    IdNum: 1951,
	  },
	  {
	    Name: 'Arsenic',
	    GuideNum: 152,
	    IdNum: 1558,
	  },
	  {
	    Name: 'Arsenic acid, liquid',
	    GuideNum: 154,
	    IdNum: 1553,
	  },
	  {
	    Name: 'Arsenic acid, solid',
	    GuideNum: 154,
	    IdNum: 1554,
	  },
	  {
	    Name: 'Arsenical dust',
	    GuideNum: 152,
	    IdNum: 1562,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, flammable, poisonous',
	    GuideNum: 131,
	    IdNum: 2760,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, flammable, toxic',
	    GuideNum: 131,
	    IdNum: 2760,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, poisonous',
	    GuideNum: 151,
	    IdNum: 2994,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, poisonous, flammable',
	    GuideNum: 131,
	    IdNum: 2993,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, toxic',
	    GuideNum: 151,
	    IdNum: 2994,
	  },
	  {
	    Name: 'Arsenical pesticide, liquid, toxic, flammable',
	    GuideNum: 131,
	    IdNum: 2993,
	  },
	  {
	    Name: 'Arsenical pesticide, solid, poisonous',
	    GuideNum: 151,
	    IdNum: 2759,
	  },
	  {
	    Name: 'Arsenical pesticide, solid, toxic',
	    GuideNum: 151,
	    IdNum: 2759,
	  },
	  {
	    Name: 'Arsenic bromide',
	    GuideNum: 151,
	    IdNum: 1555,
	  },
	  {
	    Name: 'Arsenic chloride',
	    GuideNum: 157,
	    IdNum: 1560,
	    TIH: true,
	  },
	  {
	    Name: 'Arsenic compound, liquid, n.o.s.',
	    GuideNum: 152,
	    IdNum: 1556,
	  },
	  {
	    Name: 'Arsenic compound, liquid, n.o.s., inorganic',
	    GuideNum: 152,
	    IdNum: 1556,
	  },
	  {
	    Name: 'Arsenic compound, solid, n.o.s.',
	    GuideNum: 152,
	    IdNum: 1557,
	  },
	  {
	    Name: 'Arsenic compound, solid, n.o.s., inorganic',
	    GuideNum: 152,
	    IdNum: 1557,
	  },
	  {
	    Name: 'Arsenic pentoxide',
	    GuideNum: 151,
	    IdNum: 1559,
	  },
	  {
	    Name: 'Arsenic trichloride',
	    GuideNum: 157,
	    IdNum: 1560,
	    TIH: true,
	  },
	  {
	    Name: 'Arsenic trioxide',
	    GuideNum: 151,
	    IdNum: 1561,
	  },
	  {
	    Name: 'Arsine',
	    GuideNum: 119,
	    IdNum: 2188,
	    TIH: true,
	  },
	  {
	    Name: 'Articles containing Polychlorinated biphenyls (PCB)',
	    GuideNum: 171,
	    IdNum: 2315,
	  },
	  {
	    Name: 'Articles, pressurized, hydraulic (containing non-flammable gas)',
	    GuideNum: 126,
	    IdNum: 3164,
	  },
	  {
	    Name: 'Articles, pressurized, pneumatic (containing non-flammable gas)',
	    GuideNum: 126,
	    IdNum: 3164,
	  },
	  {
	    Name: 'Aryl sulfonic acids, liquid, with more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2584,
	  },
	  {
	    Name: 'Aryl sulfonic acids, liquid, with not more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2586,
	  },
	  {
	    Name: 'Aryl sulfonic acids, solid, with more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2583,
	  },
	  {
	    Name: 'Aryl sulfonic acids, solid, with not more than 5% free Sulfuric acid',
	    GuideNum: 153,
	    IdNum: 2585,
	  },
	  {
	    Name: 'Aryl sulphonic acids, liquid, with more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2584,
	  },
	  {
	    Name: 'Aryl sulphonic acids, liquid, with not more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2586,
	  },
	  {
	    Name: 'Aryl sulphonic acids, solid, with more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2583,
	  },
	  {
	    Name: 'Aryl sulphonic acids, solid, with not more than 5% free Sulphuric acid',
	    GuideNum: 153,
	    IdNum: 2585,
	  },
	  {
	    Name: 'Asbestos',
	    GuideNum: 171,
	    IdNum: 2212,
	  },
	  {
	    Name: 'Asbestos, blue',
	    GuideNum: 171,
	    IdNum: 2212,
	  },
	  {
	    Name: 'Asbestos, brown',
	    GuideNum: 171,
	    IdNum: 2212,
	  },
	  {
	    Name: 'Asbestos, white',
	    GuideNum: 171,
	    IdNum: 2590,
	  },
	  {
	    Name: 'Asphalt',
	    GuideNum: 130,
	    IdNum: 1999,
	  },
	  {
	    Name: 'Aviation regulated liquid, n.o.s.',
	    GuideNum: 171,
	    IdNum: 3334,
	  },
	  {
	    Name: 'Aviation regulated solid, n.o.s.',
	    GuideNum: 171,
	    IdNum: 3335,
	  },
	  {
	    Name: '1-Aziridinyl phosphine oxide (Tris)',
	    GuideNum: 152,
	    IdNum: 2501,
	  },
	  {
	    Name: 'Azodicarbonamide',
	    GuideNum: 149,
	    IdNum: 3242,
	  },
	  {
	    Name: 'Barium',
	    GuideNum: 138,
	    IdNum: 1400,
	  },
	  {
	    Name: 'Barium alloys, pyrophoric',
	    GuideNum: 135,
	    IdNum: 1854,
	  },
	  {
	    Name: 'Barium azide, wetted with not less than 50% water',
	    GuideNum: 113,
	    IdNum: 1571,
	  },
	  {
	    Name: 'Barium bromate',
	    GuideNum: 141,
	    IdNum: 2719,
	  },
	  {
	    Name: 'Barium chlorate',
	    GuideNum: 141,
	    IdNum: 1445,
	  },
	  {
	    Name: 'Barium chlorate, solid',
	    GuideNum: 141,
	    IdNum: 1445,
	  },
	  {
	    Name: 'Barium chlorate, solution',
	    GuideNum: 141,
	    IdNum: 3405,
	  },
	  {
	    Name: 'Barium compound, n.o.s.',
	    GuideNum: 154,
	    IdNum: 1564,
	  },
	  {
	    Name: 'Barium cyanide',
	    GuideNum: 157,
	    IdNum: 1565,
	  },
	  {
	    Name: 'Barium hypochlorite, with more than 22% available Chlorine',
	    GuideNum: 141,
	    IdNum: 2741,
	  },
	  {
	    Name: 'Barium nitrate',
	    GuideNum: 141,
	    IdNum: 1446,
	  },
	  {
	    Name: 'Barium oxide',
	    GuideNum: 157,
	    IdNum: 1884,
	  },
	  {
	    Name: 'Barium perchlorate',
	    GuideNum: 141,
	    IdNum: 1447,
	  },
	  {
	    Name: 'Barium perchlorate, solid',
	    GuideNum: 141,
	    IdNum: 1447,
	  },
	  {
	    Name: 'Barium perchlorate, solution',
	    GuideNum: 141,
	    IdNum: 3406,
	  },
	  {
	    Name: 'Barium permanganate',
	    GuideNum: 141,
	    IdNum: 1448,
	  },
	  {
	    Name: 'Barium peroxide',
	    GuideNum: 141,
	    IdNum: 1449,
	  },
	  {
	    Name: 'Batteries, containing Sodium',
	    GuideNum: 138,
	    IdNum: 3292,
	  },
	  {
	    Name: 'Batteries, dry, containing Potassium hydroxide solid',
	    GuideNum: 154,
	    IdNum: 3028,
	  },
	  {
	    Name: 'Batteries, nickel-metal hydride',
	    GuideNum: 171,
	    IdNum: 3496,
	  },
	  {
	    Name: 'Batteries, wet, filled with acid',
	    GuideNum: 154,
	    IdNum: 2794,
	  },
	  {
	    Name: 'Batteries, wet, filled with alkali',
	    GuideNum: 154,
	    IdNum: 2795,
	  },
	  {
	    Name: 'Batteries, wet, non-spillable',
	    GuideNum: 154,
	    IdNum: 2800,
	  },
	  {
	    Name: 'Battery fluid, acid',
	    GuideNum: 157,
	    IdNum: 2796,
	  },
	  {
	    Name: 'Battery fluid, alkali',
	    GuideNum: 154,
	    IdNum: 2797,
	  },
	  {
	    Name: 'Battery fluid, alkali, with battery',
	    GuideNum: 154,
	    IdNum: 2797,
	  },
	  {
	    Name: 'Battery fluid, alkali, with electronic equipment or actuating device',
	    GuideNum: 154,
	    IdNum: 2797,
	  },
	  {
	    Name: 'Battery-powered equipment (wet battery)',
	    GuideNum: 154,
	    IdNum: 3171,
	  },
	  {
	    Name: 'Battery-powered vehicle (wet battery)',
	    GuideNum: 154,
	    IdNum: 3171,
	  },
	  {
	    Name: 'Benzaldehyde',
	    GuideNum: 129,
	    IdNum: 1990,
	  },
	  {
	    Name: 'Benzene',
	    GuideNum: 130,
	    IdNum: 1114,
	  },
	  {
	    Name: 'Benzene phosphorus dichloride',
	    GuideNum: 137,
	    IdNum: 2798,
	  },
	  {
	    Name: 'Benzene phosphorus thiodichloride',
	    GuideNum: 137,
	    IdNum: 2799,
	  },
	  {
	    Name: 'Benzenesulfonyl chloride',
	    GuideNum: 156,
	    IdNum: 2225,
	  },
	  {
	    Name: 'Benzenesulphonyl chloride',
	    GuideNum: 156,
	    IdNum: 2225,
	  },
	  {
	    Name: 'Benzidine',
	    GuideNum: 153,
	    IdNum: 1885,
	  },
	  {
	    Name: 'Benzonitrile',
	    GuideNum: 152,
	    IdNum: 2224,
	  },
	  {
	    Name: 'Benzoquinone',
	    GuideNum: 153,
	    IdNum: 2587,
	  },
	  {
	    Name: 'Benzotrichloride',
	    GuideNum: 156,
	    IdNum: 2226,
	  },
	  {
	    Name: 'Benzotrifluoride',
	    GuideNum: 127,
	    IdNum: 2338,
	  },
	  {
	    Name: 'Benzoyl chloride',
	    GuideNum: 137,
	    IdNum: 1736,
	  },
	  {
	    Name: 'Benzyl bromide',
	    GuideNum: 156,
	    IdNum: 1737,
	  },
	  {
	    Name: 'Benzyl chloride',
	    GuideNum: 156,
	    IdNum: 1738,
	  },
	  {
	    Name: 'Benzyl chloroformate',
	    GuideNum: 137,
	    IdNum: 1739,
	  },
	  {
	    Name: 'Benzyldimethylamine',
	    GuideNum: 132,
	    IdNum: 2619,
	  },
	  {
	    Name: 'Benzylidene chloride',
	    GuideNum: 156,
	    IdNum: 1886,
	  },
	  {
	    Name: 'Benzyl iodide',
	    GuideNum: 156,
	    IdNum: 2653,
	  },
	  {
	    Name: 'Beryllium compound, n.o.s.',
	    GuideNum: 154,
	    IdNum: 1566,
	  },
	  {
	    Name: 'Beryllium nitrate',
	    GuideNum: 141,
	    IdNum: 2464,
	  },
	  {
	    Name: 'Beryllium powder',
	    GuideNum: 134,
	    IdNum: 1567,
	  },
	  {
	    Name: 'Bhusa, wet, damp or contaminated with oil',
	    GuideNum: 133,
	    IdNum: 1327,
	  },
	  {
	    Name: 'Bicyclo[2.2.1]hepta-2,5-diene, stabilized',
	    GuideNum: 128,
	    Poly: true,
	    IdNum: 2251,
	  },
	  {
	    Name: 'Biological agents',
	    GuideNum: 158,
	    IdNum: 'null',
	  },
	  {
	    Name: 'Biological substance, category B',
	    GuideNum: 158,
	    IdNum: 3373,
	  },
	  {
	    Name: '(Bio)Medical waste, n.o.s.',
	    GuideNum: 158,
	    IdNum: 3291,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, flammable, poisonous',
	    GuideNum: 131,
	    IdNum: 2782,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, flammable, toxic',
	    GuideNum: 131,
	    IdNum: 2782,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, poisonous',
	    GuideNum: 151,
	    IdNum: 3016,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, poisonous, flammable',
	    GuideNum: 131,
	    IdNum: 3015,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, toxic',
	    GuideNum: 151,
	    IdNum: 3016,
	  },
	  {
	    Name: 'Bipyridilium pesticide, liquid, toxic, flammable',
	    GuideNum: 131,
	    IdNum: 3015,
	  },
	  {
	    Name: 'Bipyridilium pesticide, solid, poisonous',
	    GuideNum: 151,
	    IdNum: 2781,
	  },
	  {
	    Name: 'Bipyridilium pesticide, solid, toxic',
	    GuideNum: 151,
	    IdNum: 2781,
	  },
	  {
	    Name: 'Bisulfates, aqueous solution',
	    GuideNum: 154,
	    IdNum: 2837,
	  },
	  {
	    Name: 'Bisulfites, aqueous solution, n.o.s.',
	    GuideNum: 154,
	    IdNum: 2693,
	  },
	  {
	    Name: 'Bisulfites, inorganic, aqueous solution, n.o.s.',
	    GuideNum: 154,
	    IdNum: 2693,
	  },
	  {
	    Name: 'Bisulphates, aqueous solution',
	    GuideNum: 154,
	    IdNum: 2837,
	  },
	  {
	    Name: 'Bisulphites, aqueous solution, n.o.s.',
	    GuideNum: 154,
	    IdNum: 2693,
	  },
	  {
	    Name: 'Bisulphites, inorganic, aqueous solution, n.o.s.',
	    GuideNum: 154,
	    IdNum: 2693,
	  },
	  {
	    Name: 'Blasting agent, n.o.s.',
	    GuideNum: 112,
	    IdNum: 'null',
	  },
	  {
	    Name: 'Bleaching powder',
	    GuideNum: 140,
	    IdNum: 2208,
	  },
	  {
	    Name: 'Blue asbestos',
	    GuideNum: 171,
	    IdNum: 2212,
	  },
	  {
	    Name: 'Bombs, smoke, non-explosive, with corrosive liquid, without initiating device',
	    GuideNum: 153,
	    IdNum: 2028,
	  },
	  {
	    Name: 'Borate and Chlorate mixtures',
	    GuideNum: 140,
	    IdNum: 1458,
	  },
	  {
	    Name: 'Borneol',
	    GuideNum: 133,
	    IdNum: 1312,
	  },
	  {
	    Name: 'Boron tribromide',
	    GuideNum: 157,
	    Hilight: true,
	    IdNum: 2692,
	    WRM: true,
	    TIH: true,
  		},
    ];
  });
