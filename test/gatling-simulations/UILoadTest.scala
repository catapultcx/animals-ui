
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class UILoadTest extends Simulation {

	val httpProtocol = http
		.baseUrl("http://localhost:2997")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Cache-Control" -> "max-age=0",
		"If-None-Match" -> """W/"3059-sip4Eyxu/RfYoWi9RnSiy5rDa2Y"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Wed, 26 May 2021 19:23:54 GMT",
		"If-None-Match" -> """W/"21e72-179aa222110"""")

	val headers_2 = Map(
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Wed, 26 May 2021 16:15:26 GMT",
		"If-None-Match" -> """W/"456ff-179a9759530"""")

	val headers_3 = Map(
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Wed, 26 May 2021 16:15:26 GMT",
		"If-None-Match" -> """W/"7fa-179a9759530"""")

	val headers_5 = Map(
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"1570c-7438674ba0"""")

	val headers_6 = Map(
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Wed, 26 May 2021 16:15:26 GMT",
		"If-None-Match" -> """W/"5e-179a9759530"""")

	val headers_17 = Map(
		"Accept" -> "image/webp,*/*",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"e00-7438674ba0"""")

	val headers_28 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_29 = Map(
		"Accept" -> "image/webp,*/*",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"e00-7438674ba0"""")

	val headers_30 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Origin" -> "http://localhost:2997",
		"Upgrade-Insecure-Requests" -> "1")


	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/cats")
			.headers(headers_0)
			.resources(http("list_cats")
			.get("/public/css/application.css")
			.headers(headers_1),
            http("request_2")
			.get("/public/js/jquery-1.11.3.js")
			.headers(headers_2),
            http("request_3")
			.get("/public/js/utils.js")
			.headers(headers_3),
            http("request_4")
			.get("/public/js/nunjucks-slim.min.js")
			.check(status.is(404)),
            http("request_5")
			.get("/assets/js/all.js")
			.headers(headers_5),
            http("request_6")
			.get("/public/js/app.js")
			.headers(headers_6),
            http("request_7")
			.get("/public/js/rules.js")
			.check(status.is(404)),
            http("request_8")
			.get("/public/js/step-by-step-navigation.js")
			.check(status.is(404)),
            http("request_9")
			.get("/public/js/tables.js")
			.check(status.is(404)),
            http("request_10")
			.get("/public/js/documents.js")
			.check(status.is(404)),
            http("request_11")
			.get("/public/js/accessible-autocomplete.min.js")
			.check(status.is(404)),
            http("request_12")
			.get("/public/js/registrations.js")
			.check(status.is(404)),
            http("request_13")
			.get("/public/js/applications.js")
			.check(status.is(404)),
            http("request_14")
			.get("/public/js/templates.js")
			.check(status.is(404)),
            http("request_15")
			.get("/public/js/jsonpath.min.js")
			.check(status.is(404)),
            http("request_16")
			.get("/public/js/jquery.jsonview.js")
			.check(status.is(404)),
            http("request_17")
			.get("/assets/images/govuk-crest.png")
			.headers(headers_17),
            http("request_18")
			.get("/public/js/step-by-step-navigation.js")
			.check(status.is(404)),
            http("request_19")
			.get("/public/js/jsonpath.min.js")
			.check(status.is(404)),
            http("request_20")
			.get("/public/js/accessible-autocomplete.min.js")
			.check(status.is(404)),
            http("request_21")
			.get("/public/js/tables.js")
			.check(status.is(404)),
            http("request_22")
			.get("/public/js/templates.js")
			.check(status.is(404)),
            http("request_23")
			.get("/public/js/nunjucks-slim.min.js")
			.check(status.is(404)),
            http("request_24")
			.get("/public/js/registrations.js")
			.check(status.is(404)),
            http("request_25")
			.get("/public/js/applications.js")
			.check(status.is(404)),
            http("request_26")
			.get("/public/js/rules.js")
			.check(status.is(404)),
            http("request_27")
			.get("/public/js/documents.js")
			.check(status.is(404))))
		.pause(3)
		.exec(http("request_28")
			.get("/cats/add")
			.headers(headers_28)
			.resources(http("request_29")
			.get("/assets/images/govuk-crest.png")
			.headers(headers_29)))
		.pause(7)
		.exec(http("create_cat")
			.post("/cats")
			.headers(headers_30)
			.formParam("name", "kitty")
			.formParam("description", "blaster")
			.resources(http("request_31")
			.get("/assets/images/govuk-crest.png")
			.headers(headers_29)))
		.pause(4)
		.exec(http("get_cat")
			.get("/cats/4a61d052-e269-4cc3-93d6-8a624054d1da")
			.headers(headers_28)
			.resources(http("request_33")
			.get("/assets/images/govuk-crest.png")
			.headers(headers_29)))

	setUp(scn.inject(rampUsers(1000).during(10.seconds))).protocols(httpProtocol)
}