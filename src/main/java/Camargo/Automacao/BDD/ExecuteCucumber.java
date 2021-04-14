package Camargo.Automacao.BDD;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        tags={""},
        features = {"src/test/java/Camargo/Automacao/BDD/Features"},
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        plugin={"pretty", "html:target/cucumber-html-report.html","json:target/cucumber.json"},
        glue={""},
        monochrome = true,
        strict = true,
        dryRun = false
)
public class ExecuteCucumber {

}
