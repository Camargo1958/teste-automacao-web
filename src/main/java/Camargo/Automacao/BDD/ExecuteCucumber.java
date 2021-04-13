package Camargo.Automacao.BDD;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        tags={"@cadastrar"},
        features = {"src/test/java/Camargo/Automacao/BDD/Features"},
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        plugin={"pretty", "html:target/cucumber-html-report.html"},
        glue={""},
        monochrome = true,
        strict = true,
        dryRun = false
)
public class ExecuteCucumber {

}
