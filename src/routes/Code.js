import React, { useState } from 'react';

import { IconButton, Box, Tabs, Tab, Grid, Container } from '@material-ui/core';
import { SyncAlt as InvertIcon } from '@material-ui/icons';

import TranslateBox from '../components/TranslateBox';

import { useStyles } from '../styles';

function App() {
  const [language, toggleLanguage] = useState(false);
  const [text, changeText] = useState('');

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.translateBox}>
          <TranslateBox style={classes}>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              className={classes.tabs}>
              <Tabs
                className={classes.tabsWrapper}
                value={language ? 0 : 1}
                onChange={(value, newValue) =>
                  newValue === 1 ? toggleLanguage(false) : toggleLanguage(true)
                }>
                <Tab
                  className={classes.tab}
                  style={{ marginLeft: 'auto' }}
                  label="Descodificado"
                />
                <Tab
                  className={classes.tab}
                  style={{ marginRight: 'auto' }}
                  label="Codificado"
                />
              </Tabs>
            </Grid>
            {window.innerWidth < 960 && (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.textBox}>
                <textarea
                  value={text}
                  onChange={(e) => {
                    const re = /^[0-1\b]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                      changeText(e.target.value);
                    }
                  }}
                  className={classes.textField}
                  style={{
                    borderBottomLeftRadius: 10,
                  }}
                />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              className={classes.invertButtonBox}>
              <Container className={classes.invertButton}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleLanguage((oldValue) => !oldValue)}>
                  <InvertIcon />
                </IconButton>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              className={classes.tabs}>
              <Tabs
                className={classes.tabsWrapper}
                value={language ? 0 : 1}
                onChange={(value, newValue) =>
                  newValue === 1 ? toggleLanguage(false) : toggleLanguage(true)
                }>
                <Tab
                  className={classes.tab}
                  style={{ marginLeft: 'auto' }}
                  label="Codificado"
                />
                <Tab
                  className={classes.tab}
                  style={{ marginRight: 'auto' }}
                  label="Descodificado"
                />
              </Tabs>
            </Grid>
            {window.innerWidth >= 960 && (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.textBox}>
                <textarea
                  value={text}
                  onChange={(e) => {
                    const re = /^[0-1\b]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                      changeText(e.target.value);
                    }
                  }}
                  className={classes.textField}
                  style={{ borderBottomLeftRadius: 10 }}
                />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className={classes.textBox}>
              <textarea
                className={classes.textField}
                style={{
                  borderBottomRightRadius: 10,
                }}
                readOnly
              />
            </Grid>
          </TranslateBox>
        </Box>
      </Box>
    </div>
  );
}

export default App;
