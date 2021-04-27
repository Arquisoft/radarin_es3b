package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class friendsList_50users extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines3brestapi.herokuapp.com")
		.inferHtmlResources(BlackList(), WhiteList())
		.acceptHeader("application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1")
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
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_8 = Map(
		"Accept" -> "*/*",
		"Origin" -> "https://radarines3bwebapp.herokuapp.com",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "cross-site",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_9 = Map(
		"Accept" -> "*/*",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

    val uri1 = "https://rcen.solidcommunity.net/profile/card"
    val uri2 = "https://diegotn17.solidcommunity.net/profile/card"
    val uri4 = "https://radarines3bwebapp.herokuapp.com/.well-known/solid/logout"
    val uri5 = "https://luislomba.solidcommunity.net/profile/card"
    val uri6 = "https://solidcommunity.net/logout"
    val uri7 = "https://lugb.solidcommunity.net/profile/card"
    val uri8 = "https://antsuarz.solidcommunity.net/profile/card"
    val uri9 = "https://kike.solidcommunity.net/profile/card"

	val scn = scenario("friendsList")
		.exec(http("request_0")
			.get("/api/userRegister/get/masuhev")
			.headers(headers_0))
		.pause(3)
		.exec(http("request_1")
			.get(uri8)
			.headers(headers_1)
			.resources(http("request_2")
			.get(uri9)
			.headers(headers_1),
            http("request_3")
			.get(uri7)
			.headers(headers_1),
            http("request_4")
			.get(uri5)
			.headers(headers_1),
            http("request_5")
			.get(uri1)
			.headers(headers_1),
            http("request_6")
			.get(uri2)
			.headers(headers_1)))
		.pause(3)
		.exec(http("request_7")
			.get("/api/userRegister/get/masuhev")
			.headers(headers_0))
		.pause(1)
		.exec(http("request_8")
			.get(uri6)
			.headers(headers_8)
			.resources(http("request_9")
			.get(uri4)
			.headers(headers_9)
			.check(status.is(404))))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}