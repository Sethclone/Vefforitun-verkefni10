# Vefforitun-verkefni10

Þetta verkefni notar Vite, Vue og Bootstrap.

Allt nema bootstrap er algjörlega nýtt fyrir mér þannig ég gerði mitt besta með að reyna vinna með nýju frameworki.

Ég notaði npm install vite. og svo create-vite fids-website til að búa til projectið og valdi vue sem frameworkið og svo bootstrap sem css. Svo setti eg bootstrap og AXIOS í import. Til að læra á hvernig vue virkar fylgi ég tutorial á youtube og bjó til HelloWorld.vue 

Svo fór ég að vinna á FlightsList.vue sem er aðalefni síðunnar. FIDS er notað á flugvellinum og stendur fyrir Flight information display system. API sem ég fæ kemur frá ISAVIA og er beintengdur við upplýsingarnar sem hægt að fá á flugvellinum. Síðan er hentug þeim sem vinna á flugvellinum þar sem FIDS síðan er ekki vel optimized til að sýna aðeins notanlegar upplýsingar sem tengjast vinnu. Þetta er verkefni byggt af prototýpu sem ég gerði fyrir ári meðan ég starfaði á flugvellinum.

Síðan er mjög einföld, Hún sýnir flug sem koma til íslands og eru svo meðhöndluð af annarhvort APA(Airport Associates) eða IGS(Icelandair Ground Services) Það þæginlega við þetta er að APA tekur yfirleitt við Economy flugum meðan IGS tekur við þeim á dýra kantinum. Þannig þegar filterað er fyrir flight_handler þá koma upplýsingar fyrir economy flugum og Icelandair flugum(og samstarfsfyrirtæki þeirra)