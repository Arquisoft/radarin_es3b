package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class help_50users extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines3brestapi.herokuapp.com")
		.inferHtmlResources(BlackList(), WhiteList())
		.acceptHeader("image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "*/*",
		"If-None-Match" -> """W/"4a-a26zHKYqUooKE6yADgrjrIymS/I"""",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_1 = Map(
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_12 = Map(
		"Accept" -> "*/*",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_13 = Map(
		"Accept" -> "*/*",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

    val uri2 = "https://radarines3bwebapp.herokuapp.com"
    val uri3 = "https://solidcommunity.net/logout"

	val scn = scenario("help")
		.exec(http("request_0")
			.get("/api/userRegister/get/masuhev")
			.headers(headers_0))
		.pause(3)
		.exec(http("request_1")
			.get(uri2 + "/static/media/MenuDrawerLogOut.bd8d8c13.PNG")
			.headers(headers_1)
			.resources(http("request_2")
			.get(uri2 + "/static/media/navHome.58a93189.png")
			.headers(headers_1),
            http("request_3")
			.get(uri2 + "/static/media/menuDrawerIniciarSesion.79617e99.PNG")
			.headers(headers_1),
            http("request_4")
			.get(uri2 + "/static/media/navIniciarSesi%C3%B3n.31183a3e.PNG")
			.headers(headers_1),
            http("request_5")
			.get(uri2 + "/static/media/IniciarSesionPopUp.2bcdced0.PNG")
			.headers(headers_1),
            http("request_6")
			.get(uri2 + "/static/media/FormIniciarSesi%C3%B3n.4a41016d.PNG")
			.headers(headers_1),
            http("request_7")
			.get(uri2 + "/static/media/MenuDrawerLogIn.aa5c8077.PNG")
			.headers(headers_1),
            http("request_8")
			.get(uri2 + "/static/media/AreaVis.4c2f6f72.PNG")
			.headers(headers_1),
            http("request_9")
			.get(uri2 + "/static/media/HomeNotLoged.c55d7bae.PNG")
			.headers(headers_1),
            http("request_10")
			.get(uri2 + "/static/media/HomeLoged.824d2778.PNG")
			.headers(headers_1)))
		.pause(7)
		.exec(http("request_11")
			.get("/api/userRegister/get/masuhev")
			.headers(headers_0)
			.resources(http("request_12")
			.get(uri3)
			.headers(headers_12),
            http("request_13")
			.get(uri2 + "/.well-known/solid/logout")
			.headers(headers_13)
			.check(status.is(404))))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}