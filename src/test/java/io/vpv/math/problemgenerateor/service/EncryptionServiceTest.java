package io.vpv.math.problemgenerateor.service;

import io.vpv.math.problemgenerateor.ProblemGenerateorApplicationTests;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.*;

public class EncryptionServiceTest extends ProblemGenerateorApplicationTests {

    @Autowired
    private EncryptionService encryptionService;


    private static final String GOOD_PASS = "TESTTESTTESTTEST";
    private static final String BAD_PASS = "BADBADBAD";

    @Test
    public void encrypt() throws Exception {
        String text = "Hello World!";
        encryptionService.setKeyStr(GOOD_PASS);
        String encrypted = encryptionService.encrypt(text);
        Assert.assertNotNull("should have an encrypted message", encrypted);
        Assert.assertTrue("Needs to match String", "7E89B6D66B7B001C7AE6955F122530D9".equals(encrypted));
    }

    @Test
    public void decrypt() throws Exception {
        String encrypted = "7E89B6D66B7B001C7AE6955F122530D9";
        encryptionService.setKeyStr(GOOD_PASS);
        String text = encryptionService.decrypt(encrypted);
        Assert.assertNotNull("should have an encrypted message", text);
        Assert.assertTrue("Needs to match String", "Hello World!".equals(text));
    }

    @Test
    public void encryptAndDecrypt() throws Exception {
        String text = "Hello World!";
        encryptionService.setKeyStr(GOOD_PASS);
        String result = encryptionService.decrypt(encryptionService.encrypt(text));
        Assert.assertNotNull("should have an encrypted message", result);
        Assert.assertTrue("Needs to match String", text.equals(result));
    }

    @Test(expected = Exception.class)
    public void badGuy() throws Exception {
        String text = "Hello World!";
        encryptionService.setKeyStr(BAD_PASS);
        String result = encryptionService.encrypt(text);
    }
}