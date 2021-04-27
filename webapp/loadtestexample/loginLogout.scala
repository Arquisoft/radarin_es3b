package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class loginLogout extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines3brestapi.herokuapp.com")
		.inferHtmlResources(BlackList(), WhiteList())
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
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

	val headers_2 = Map(
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

    val uri2 = "https://radarines3bwebapp.herokuapp.com/.well-known/solid/logout"
    val uri3 = "https://solidcommunity.net/logout"

	val scn = scenario("loginLogout")
		.exec(http("request_0")
			.get("/api/userRegister/get/masuhev")
			.headers(headers_0))
		.pause(2)
		.exec(http("request_1")
			.get(uri3)
			.headers(headers_1)
			.resources(http("request_2")
			.get(uri2)
			.headers(headers_2)
			.check(status.is(404))))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}