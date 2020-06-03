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
		'successPartners': 'Partenaires'
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
		'successPartners': 'Partners'
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
		$("div").filter(".partners").html('<span class="w3-xlarge">6+</span><br>' + arrLang[lang]["successPartners"]);
		$('.lang').each(function(index, item) {
			$(this).filter(".lang").text(arrLang[lang][$(this).attr('key')]);
		});
	});
});