package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class admin_50users extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines3bwebapp.herokuapp.com")
		.inferHtmlResources(BlackList(), WhiteList())
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_1 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site")

	val headers_2 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"Content-Type" -> "application/json",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_3 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_4 = Map(
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_6 = Map(
		"Accept" -> "application/json",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_8 = Map(
		"accept" -> "image/webp,*/*",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_9 = Map(
		"Accept" -> "application/json",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-None-Match" -> """W/"11236-ADI5GPKoj+cNEoMuWrCZAuPNMv4"""",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_10 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-None-Match" -> """W/"208-VXzlzy8GZBIdpLko0eYxK+rppDU"""",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_11 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-Modified-Since" -> "Mon, 26 Apr 2021 19:38:54 GMT",
		"If-None-Match" -> """W/"639e1-1790fb114b0"""",
		"Sec-Fetch-Dest" -> "worker",
		"Sec-Fetch-Mode" -> "same-origin",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_15 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-None-Match" -> """W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"""",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_16 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, br",
		"accept-language" -> "es-ES,es;q=0.9",
		"content-type" -> "text/plain",
		"origin" -> "https://radarines3bwebapp.herokuapp.com",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site")

	val headers_30 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"Content-Type" -> "text/plain",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_125 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-None-Match" -> """W/"1bd-KYlMXYhyr7X7jU/817v8zdBBbO4"""",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_188 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-Modified-Since" -> "Mon, 26 Apr 2021 19:38:54 GMT",
		"If-None-Match" -> """W/"ec39-1790fb114b0"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_189 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-Modified-Since" -> "Mon, 26 Apr 2021 19:38:54 GMT",
		"If-None-Match" -> """W/"f525-1790fb114b0"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_190 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9",
		"If-Modified-Since" -> "Mon, 26 Apr 2021 19:38:54 GMT",
		"If-None-Match" -> """W/"17a45-1790fb114b0"""",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

    val uri2 = "https://api.mapbox.com"
    val uri3 = "https://events.mapbox.com/events/v2"
    val uri4 = "https://radarines3brestapi.herokuapp.com/api"
    val uri5 = "https://api.tiles.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"

	val scn = scenario("admin")
		.exec(http("request_0")
			.get("/static/media/mapa-admin.jpg.bb7da45e.png")
			.headers(headers_0))
		.pause(5)
		.exec(http("request_1")
			.options(uri4 + "/admin/login")
			.headers(headers_1)
			.resources(http("request_2")
			.post(uri4 + "/admin/login")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/admin/0002_request.json")),
            http("request_3")
			.get(uri4 + "/userRegister/list")
			.headers(headers_3),
            http("request_4")
			.get(uri5)
			.headers(headers_4),
            http("request_5")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_3),
            http("request_6")
			.get(uri2 + "/v4/mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2.json?secure&access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_6),
            http("request_7")
			.get(uri2 + "/styles/v1/mapbox/streets-v11/sprite.json?access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_6),
            http("request_8")
			.get(uri2 + "/styles/v1/mapbox/streets-v11/sprite.png?access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_8),
            http("request_9")
			.get(uri2 + "/styles/v1/mapbox/streets-v11?access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_9),
            http("request_10")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_11")
			.get("/static/js/mapbox-gl-csp-worker.8621be1b.worker.js")
			.headers(headers_11),
            http("request_12")
			.get("/static/js/mapbox-gl-csp-worker.8621be1b.worker.js")
			.headers(headers_11),
            http("request_13")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_14")
			.get(uri2 + "/v4/mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2/0/0/0.vector.pbf?sku=101ZjGRFK3fal&access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_3),
            http("request_15")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_16")
			.post(uri3 + "?access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_16)
			.body(RawFileBody("computerdatabase/admin/0016_request.txt")),
            http("request_17")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_18")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_19")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_20")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_21")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_22")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_23")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_24")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_25")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_26")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_27")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_28")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_29")
			.post(uri3 + "?access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_16)
			.body(RawFileBody("computerdatabase/admin/0029_request.txt")),
            http("request_30")
			.get(uri2 + "/map-sessions/v1?sku=101ZjGRFK3fal&access_token=pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg")
			.headers(headers_30),
            http("request_31")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_32")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_33")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_34")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_35")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_36")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_37")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_38")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_39")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_40")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_41")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_42")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_43")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_44")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_45")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_46")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_47")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_48")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_49")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_50")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_51")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_52")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_53")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_54")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_55")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_56")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_57")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_58")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_59")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_60")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_61")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_62")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_63")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_64")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_65")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_66")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_67")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_68")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_69")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_70")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_71")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_72")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_73")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_74")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_75")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_76")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_77")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_78")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_79")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_80")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_81")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_82")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_83")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_84")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_85")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_86")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_87")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_88")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_89")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_90")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_91")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_92")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_93")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_94")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_95")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_96")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_97")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_98")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_99")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_100")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_101")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_102")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_103")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_104")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_105")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_106")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_107")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_108")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_109")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_110")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_111")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_112")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_113")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_114")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_115")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_116")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_117")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_118")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_119")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_120")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_121")
			.get(uri4 + "/userRegister/delete/masuhev")
			.headers(headers_3),
            http("request_122")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_123")
			.get(uri4 + "/userRegister/list")
			.headers(headers_10),
            http("request_124")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_125")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_126")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_127")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_128")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_129")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_130")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_131")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_132")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_133")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_134")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_135")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_136")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_137")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_138")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_139")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_140")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_141")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_142")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_143")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_144")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_145")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_146")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_147")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_148")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_149")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_150")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_151")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_152")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_153")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_154")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_155")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_156")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_157")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_158")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_159")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_160")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_161")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_162")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_163")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_164")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_165")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_166")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_167")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_168")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_169")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_170")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_171")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_172")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_173")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_174")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_175")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_176")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_177")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_178")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_179")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_180")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_181")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_182")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_183")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_184")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_185")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_186")
			.get(uri4 + "/userRegister/list")
			.headers(headers_125),
            http("request_187")
			.get(uri4 + "/userLocalization/list")
			.headers(headers_15),
            http("request_188")
			.get("/static/media/mapa.e7263518.jpg")
			.headers(headers_188),
            http("request_189")
			.get("/static/media/github.268774c7.png")
			.headers(headers_189),
            http("request_190")
			.get("/static/media/solid.26eab01f.PNG")
			.headers(headers_190)))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}