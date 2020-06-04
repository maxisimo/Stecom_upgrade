var arrLang = {
	'fr': {
		'navBarHome': 'ACCUEIL',
		'navBarAbout': 'À PROPOS',
		'navBarCompany': 'L\'ENTREPRISE',
		'navBarContact': 'CONTACT',
		'about-h3': 'BIENVENUE CHEZ STECOM',
		'about-p1': 'Chez STECOM, le personnel est hautement qualifié ! Ingénieurs reconnus pour leur professionnalisme dans les domaines aussi variés que la vidéosurveillance, le traitement vidéo sur IP, les réseaux informatiques et télécoms, la sonorisation de sécurité, les télécommunications. Ces expériences ont permis d\'accumuler des compétences, de développer des synergies et de faire de STECOM l\'une des toutes meilleures sociétés sur des marchés aussi variés que le stationnement, ou l\'hostpitalité avec des références prestigieuses et fidèles telles que SAEMES, Ecole des mines, Parkelis, hôtel St James ...',
		'about-p2': 'Vidéosurveillance, services multimédias, contrôle d’accès, sonorisation, interphonie, guidage à la place…',
		'about-p3': 'STECOM conçoit, installe et entretien des systèmes de sécurité incendie, contrôle d’accès, interphonie, sonorisation pour les secteurs industriels tertiaires, transports et environnement. Associé à des équipements de pointe et une maintenance d’exception, STECOM vous aide à maîtriser toute la chaîne de mise en sécurité de vos sites aux meilleurs coûts et vous garanti une simplicité d’exploitation de vos systèmes.',
		'about-p4': 'Notre mission est de proposer à nos clients des solutions techniques adaptées pour améliorer leur compétitivité.',
		'about-p5': 'STECOM vous propose des gammes complètes de produits totalement en adéquation avec la réglementation quelque soit le site à protéger : parkings couverts – structures d’accueil pour personnes âgées – hôtels – restaurants – salles de spectacle – administrations – banques – bureaux … Des produits et accessoires disponibles et aux meilleurs coûts : par des relations privilégiés avec les grands constructeurs, STECOM vous fait bénéficier des meilleurs prix sur une large gamme de produits agréés et disponibles.',
		'about-p6': 'Spécialisations:',
		'about-p7': 'Vidéosurveillance',
		'about-p8': 'Contrôle d\'accès',
		'about-p9': 'Services multimédias',
		'successPartners': 'Partenaires',
		'successProjects': 'Projets',
		'successClients': 'Clients Satisfaits',
		'successSites': 'Chantiers',
		'company': 'L\'ENTREPRISE',
		'company-p1': 'Avec plus de 15ans d\'expérience et une situation financère solide,  STECOM est une société au capital de 100 000 €. L\'implantation stratégique de ses bureaux parisien lui confère une excellente réactivité vers ses principaux clients et un confort de travail unique.',
		'company-p1-2': 'Grâce à ses compétences en ingénierie électrique, électronique, informatique et télécoms, STECOM a su conquérir des marchés tels que :',
		'company-p1-3': 'hôtels, banques, assurances, SSII, parkings... où la sécurité des biens et des personnes est l\'une des priorités du moment.',
		'companyPartners': 'PARTENAIRES',
		'contactInformations': 'COORDONNEES',
		'contact-p1': 'Le service de messagerie est momentanément bloqué, veuillez passer par votre applications mail habituelle pour m\'envoyer un message.',
		'contactThanks': 'Merci.',
		'contactSend': 'ENVOYER',
		'footerTop': 'Revenir au début'
	},
	'en': {
		'navBarHome': 'HOME',
		'navBarAbout': 'ABOUT',
		'navBarCompany': 'COMPANY',
		'navBarContact': 'CONTACT',
		'about-h3': 'WELCOME AT STECOM',
		'about-p1': 'At STECOM, the staff is highly qualified! Engineers are recognized for their professionalism in specialized fields such as video surveillance, video processing over IP, computer networks and telecoms, security messaging, telecommunications. These experiences yielded to accumulate skills, develop synergies and make STECOM one of the very best companies in markets as varied as parking, or hospitality with prestigious and loyal references such as SAEMES, MINES ParisTech, Parkelis, St James hotel ...',
		'about-p2': 'Video surveillance, multimedia services, access control, sound, intercom, parking guidance system…',
		'about-p3': 'STECOM designs, installs and maintains fire safety systems, access control, intercom, sound systems for the tertiary industrial sectors, transport and environment. Combined with state-of-the-art equipment and exceptional maintenance, STECOM helps you to master the entire security chain for your locations at the lowest cost and guarantees ease of use of your systems.',
		'about-p4': 'Our mission is to offer our customers adapted technical solutions to improve their competitiveness.',
		'about-p5': 'STECOM offers you wide range of quality products fully in accordance with regulations, whatever the site to be protected: covered car parks - elderly care facilities - hotels - restaurants - performance halls - administrations - banks - offices… These products and accessories are available at the best cost : through privileged relationships with major manufacturers, STECOM gives you the best prices on a wide range of approved and available products.',
		'about-p6': 'Expertises:',
		'about-p7': 'Video surveillance',
		'about-p8': 'Access control',
		'about-p9': 'Multimedia services',
		'successPartners': 'Partners',
		'successProjects': 'Projects',
		'successClients': 'Happy Clients',
		'successSites': 'Sites',
		'company': 'COMPANY',
		'company-p1': 'With more than 15 years of experience and a solid financial situation, STECOM is a company with a capital of 100,000 €. The strategic location of its Parisian offices gives it excellent responsiveness to its main customers and unique working comfort.',
		'company-p1-2': 'Thanks to its skills in electrical engineering, electronic, IT and telecoms, STECOM has been able to conquer markets such as:',
		'company-p1-3': 'hotels, banks, insurance, IT services companies, car parks ... where the the safety of property and people is one of the current priorities.',
		'companyPartners': 'PARTNERS',
		'contactInformations': 'WHERE I WORK',
		'contact-p1': 'The messaging service is temporarily blocked, please use your usual email applications to send me a message.',
		'contactThanks': 'Thanks.',
		'contactSend': 'SEND',
		'footerTop': 'To the top'
	}
};

// Process translation
$(function() {
	$('.translate').click(function() {
		var lang = $(this).attr('id');

		$("[href='#about']").html('<i class="fa fa-user"></i> ' + arrLang[lang]["navBarAbout"]);
		$("[href='#company']").html('<i class="fa fa-th"></i> ' + arrLang[lang]["navBarCompany"]);
		$("[href='#contact']").html('<i class="fa fa-envelope"></i> ' + arrLang[lang]["navBarContact"]);
		$("p").filter(".about-p7").html('<i class="fa fa-video-camera"></i> ' + arrLang[lang]["about-p7"]);
		$("p").filter(".about-p8").html('<i class="fa fa-laptop"></i> ' + arrLang[lang]["about-p8"]);
		$("p").filter(".about-p9").html('<i class="fa fa-tv"></i> ' + arrLang[lang]["about-p9"]);
		$("div").filter(".partners").html('<span class="w3-xlarge">14+</span><br>' + arrLang[lang]["successPartners"]);
		$("div").filter(".projects").html('<span class="w3-xlarge">55+</span><br>' + arrLang[lang]["successProjects"]);
		$("div").filter(".clients").html('<span class="w3-xlarge">89+</span><br>' + arrLang[lang]["successClients"]);
		$("div").filter(".sites").html('<span class="w3-xlarge">150+</span><br>' + arrLang[lang]["successSites"]);
		$("p").filter(".company-p1").html(arrLang[lang]["company-p1"] + '<br />' + arrLang[lang]["company-p1-2"] + '<br />' + arrLang[lang]["company-p1-3"]);
		$("p").filter(".contact-p1").html('<em>' + arrLang[lang]["contact-p1"] + '</em>');
		$("button").filter(".contactSend").html('<i class="fa fa-paper-plane"></i> ' + arrLang[lang]["contactSend"]);
		$("a").filter(".footerTop").html('<i class="fa fa-arrow-up w3-margin-right"></i>' + arrLang[lang]["footerTop"]);
		$('.lang').each(function(index, item) {
			$(this).filter(".lang").text(arrLang[lang][$(this).attr('key')]);
		});
	});
});