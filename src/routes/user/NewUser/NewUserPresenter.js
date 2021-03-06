import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

import { useStyles } from 'Styles/NewStyles';
import Dropzone from 'components/Dropzone';

export default args => {
  const {
    name,
    birthday,
    handleDateChange,
    email,
    cellPhone,
    company,
    companyDesc,
    team,
    position,
    workPhone,
    workAddress,
    majorName,
    generation,
    inputLabel,
    labelWidth,
    queryData,
    queryLoading,
    setFile,
    onSubmit,
    loading,
    axiosLoading
  } = args;

  const LoadingCheckButton = ({ loading }) =>
    loading || axiosLoading ? (
      <Button type='submit' fullWidth variant='contained' disabled>
        Loading
      </Button>
    ) : (
      <Button type='submit' fullWidth variant='contained' color='primary'>
        Submit
      </Button>
    );

  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid className={classes.title} item xs={12}>
          <Typography component='h2' variant='h6' color='primary' gutterBottom>
            유저 추가
          </Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                required
                fullWidth
                id='name'
                label='이름'
                name='name'
                autoComplete='name'
                autoFocus
                {...name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  variant='inline'
                  format='yyyy/MM/dd'
                  margin='none'
                  required
                  fullWidth
                  id='birthday'
                  label='생일'
                  value={birthday}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                {...email}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                required
                fullWidth
                id='cellPhone'
                label='휴대전화번호'
                name='cellPhone'
                autoComplete='cellPhone'
                {...cellPhone}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='company'
                label='회사명'
                name='company'
                autoComplete='company'
                {...company}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='companyDesc'
                label='업무 설명 (엔터로 구분)'
                name='companyDesc'
                autoComplete='companyDesc'
                multiline
                {...companyDesc}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='team'
                label='소속팀'
                name='team'
                autoComplete='team'
                {...team}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='position'
                label='직책'
                name='position'
                autoComplete='position'
                {...position}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='workPhone'
                label='직장번호'
                name='workPhone'
                autoComplete='workPhone'
                {...workPhone}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                margin='none'
                fullWidth
                id='workAddress'
                label='직장주소'
                name='workAddress'
                autoComplete='workAddress'
                {...workAddress}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl
                variant='outlined'
                required
                fullWidth
                disabled={queryLoading}
              >
                <InputLabel ref={inputLabel} id='majorName-label'>
                  전공
                </InputLabel>
                <Select
                  labelId='majorName-label'
                  id='majorName'
                  fullWidth
                  {...majorName}
                  labelWidth={labelWidth}
                >
                  {!queryLoading &&
                    queryData &&
                    queryData.seeAllMajor &&
                    queryData.seeAllMajor.map(row => (
                      <MenuItem key={row.name} value={row.name}>
                        {row.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl
                variant='outlined'
                required
                fullWidth
                disabled={queryLoading}
              >
                <InputLabel ref={inputLabel} id='generation-label'>
                  기수
                </InputLabel>
                <Select
                  labelId='generation-label'
                  id='generation'
                  fullWidth
                  {...generation}
                  labelWidth={labelWidth}
                >
                  {!queryLoading &&
                    queryData &&
                    queryData.seeAllGradYear &&
                    queryData.seeAllGradYear.map(row => (
                      <MenuItem key={row.generation} value={row.generation}>
                        {row.generation}기
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' color='textPrimary'>
                사진
              </Typography>
              <Dropzone setFile={setFile} />
            </Grid>
            <Grid item xs='auto' sm={4} />
            <Grid item xs={12} sm={4}>
              <LoadingCheckButton loading={loading} />
            </Grid>
            <Grid item xs='auto' sm={4} />
          </Grid>
        </form>
      </Container>
    </>
  );
};
