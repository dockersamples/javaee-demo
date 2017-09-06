FROM maven:latest AS app
WORKDIR /usr/src/movieplex7
COPY pom.xml .
RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
COPY . .
RUN mvn -B -s /usr/share/maven/ref/settings-docker.xml package -DskipTest



FROM tomee:8-jre-7.0.3-plume

# tomcat-users.xml sets up user accounts for the Tomcat manager GUI
# and script access for Maven deployments
WORKDIR /usr/local/tomee/
ADD tomcat/tomcat-users.xml conf/
ADD tomcat/web.xml conf/
#ADD tomcat/myfaces-core-2.2.12-bin/lib/* $CATALINA_HOME/lib/
# ADD tomcat/catalina.sh $CATALINA_HOME/bin/
#ADD tomcat/run.sh $CATALINA_HOME/bin/run.sh
#RUN chmod +x $CATALINA_HOME/bin/run.sh

WORKDIR /usr/local/tomee/webapps/
COPY --from=app /usr/src/movieplex7/target/movieplex7-1.0-SNAPSHOT.war .
# start tomcat7 with remote debugging
EXPOSE 8080
CMD ["catalina.sh", "run"]
