#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 0) uniform sampler2D vp_t_cb7_2A;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise vec4 temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    int temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    int temp_204;
    int temp_205;
    uint temp_206;
    uint temp_207;
    int temp_208;
    precise float temp_209;
    int temp_210;
    uint temp_211;
    uint temp_212;
    int temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    int temp_227;
    uint temp_228;
    uint temp_229;
    int temp_230;
    precise float temp_231;
    int temp_232;
    uint temp_233;
    int temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    int temp_239;
    uint temp_240;
    uint temp_241;
    int temp_242;
    precise float temp_243;
    int temp_244;
    uint temp_245;
    int temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x0103F0000007F009 Mov32i
    // 0x000010: 0xEFD87F801407FF04 Ald
    temp_0 = in_attr12.x;
    // 0x000018: 0x4C9807980D370005 Mov
    // 0x000028: 0xEFD87F801447FF07 Ald
    temp_1 = in_attr12.y;
    // 0x000030: 0x4C9807980CD7000B Mov
    // 0x000038: 0xEFD87F801487FF08 Ald
    temp_2 = in_attr12.z;
    // 0x000048: 0x4C68101000070400 Fmul
    temp_3 = temp_0 * vp_c4.data[0].x;
    // 0x000050: 0x4C68101000470402 Fmul
    temp_4 = temp_0 * vp_c4.data[1].x;
    // 0x000058: 0x49A0001000170701 Ffma
    temp_5 = fma(temp_1, vp_c4.data[0].y, temp_3);
    // 0x000068: 0x4C68101000870400 Fmul
    temp_6 = temp_0 * vp_c4.data[2].x;
    // 0x000070: 0x49A0011000570702 Ffma
    temp_7 = fma(temp_1, vp_c4.data[1].y, temp_4);
    // 0x000078: 0x49A0009000270801 Ffma
    temp_8 = fma(temp_2, vp_c4.data[0].z, temp_5);
    // 0x000088: 0x49A0001000970703 Ffma
    temp_9 = fma(temp_1, vp_c4.data[2].y, temp_6);
    // 0x000090: 0x49A0011000670802 Ffma
    temp_10 = fma(temp_2, vp_c4.data[1].z, temp_7);
    // 0x000098: 0x4C5810100037010C Fadd
    temp_11 = temp_8 + vp_c4.data[0].w;
    // 0x0000A8: 0x49A0019000A70803 Ffma
    temp_12 = fma(temp_2, vp_c4.data[2].z, temp_9);
    // 0x0000B0: 0x4C5810100077020A Fadd
    temp_13 = temp_10 + vp_c4.data[1].w;
    // 0x0000B8: 0x4C68100C01870C00 Fmul
    temp_14 = temp_11 * vp_c3.data[6].x;
    // 0x0000C8: 0x4C58101000B70313 Fadd
    temp_15 = temp_12 + vp_c4.data[2].w;
    // 0x0000D0: 0x4C68100C01070C01 Fmul
    temp_16 = temp_11 * vp_c3.data[4].x;
    // 0x0000D8: 0x49A0000C01970A02 Ffma
    temp_17 = fma(temp_13, vp_c3.data[6].y, temp_14);
    // 0x0000E8: 0x4C68100C00C70C00 Fmul
    temp_18 = temp_11 * vp_c3.data[3].x;
    // 0x0000F0: 0x49A0008C01170A01 Ffma
    temp_19 = fma(temp_13, vp_c3.data[4].y, temp_16);
    // 0x0000F8: 0x49A0010C01A71302 Ffma
    temp_20 = fma(temp_15, vp_c3.data[6].z, temp_17);
    // 0x000108: 0x49A0000C00D70A00 Ffma
    temp_21 = fma(temp_13, vp_c3.data[3].y, temp_18);
    // 0x000110: 0x49A0008C01271301 Ffma
    temp_22 = fma(temp_15, vp_c3.data[4].z, temp_19);
    // 0x000118: 0x4C58100C01B70202 Fadd
    temp_23 = temp_20 + vp_c3.data[6].w;
    // 0x000128: 0x49A0000C00E71300 Ffma
    temp_24 = fma(temp_15, vp_c3.data[3].z, temp_21);
    // 0x000130: 0x5080000000470202 Mufu
    temp_25 = 1.0 / temp_23;
    // 0x000138: 0x4C58100C01370101 Fadd
    temp_26 = temp_22 + vp_c3.data[4].w;
    // 0x000148: 0x4C58100C00F70000 Fadd
    temp_27 = temp_24 + vp_c3.data[3].w;
    // 0x000150: 0x5C68100000270003 Fmul
    temp_28 = temp_27 * temp_25;
    // 0x000158: 0x5C69100000270100 Fmul
    temp_29 = 0.0 - temp_25;
    temp_30 = temp_26 * temp_29;
    // 0x000168: 0x4C9807980D270001 Mov
    // 0x000170: 0x32A004BF00070303 Ffma
    temp_31 = fma(temp_28, 0.5, 0.5);
    // 0x000178: 0x32A004BF00070000 Ffma
    temp_32 = fma(temp_30, 0.5, 0.5);
    // 0x000188: 0x51A000980D070302 Ffma
    temp_33 = fma(temp_31, vp_c6.data[52].z, vp_c6.data[52].x);
    // 0x000190: 0x4C98079C02A70001 Mov
    // 0x000198: 0x51A002980D170003 Ffma
    temp_34 = fma(temp_32, vp_c6.data[52].w, vp_c6.data[52].y);
    // 0x0001A8: 0xDEB80007A0170200 TexB
    temp_35 = texture(vp_t_cb7_2A, vec2(temp_33, temp_34)).xyzw;
    temp_36 = temp_35.x;
    temp_37 = temp_35.y;
    temp_38 = temp_35.z;
    temp_39 = temp_35.w;
    // 0x0001B0: 0xEFD87F800807FF12 Ald
    temp_40 = in_attr0.x;
    // 0x0001B8: 0x4C9807980CC70005 Mov
    // 0x0001C8: 0xEFD87F800847FF15 Ald
    temp_41 = in_attr0.y;
    // 0x0001D0: 0x4C9807980CE70014 Mov
    // 0x0001D8: 0xEFD87F800A07FF0D Ald
    temp_42 = in_attr2.x;
    // 0x0001E8: 0x4C6810180CC70505 Fmul
    temp_43 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x0001F0: 0xEFD87F800907FF06 Ald
    temp_44 = in_attr1.x;
    // 0x0001F8: 0x49A002980CD70B11 Ffma
    temp_45 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_43);
    // 0x000208: 0xEFD87F800A47FF0F Ald
    temp_46 = in_attr2.y;
    // 0x000210: 0x4C68101000471210 Fmul
    temp_47 = temp_40 * vp_c4.data[1].x;
    // 0x000218: 0xEFD87F800947FF18 Ald
    temp_48 = in_attr1.y;
    // 0x000228: 0x4C6810100087120B Fmul
    temp_49 = temp_40 * vp_c4.data[2].x;
    // 0x000230: 0xEFD87F800887FF05 Ald
    temp_50 = in_attr0.z;
    // 0x000238: 0x4C6810100007120E Fmul
    temp_51 = temp_40 * vp_c4.data[0].x;
    // 0x000248: 0xEFD87F800987FF17 Ald
    temp_52 = in_attr1.z;
    // 0x000250: 0x5C58300000771507 Fadd
    temp_53 = 0.0 - temp_1;
    temp_54 = temp_41 + temp_53;
    // 0x000258: 0x49A0081000571510 Ffma
    temp_55 = fma(temp_41, vp_c4.data[1].y, temp_47);
    // 0x000268: 0x49A005900097150B Ffma
    temp_56 = fma(temp_41, vp_c4.data[2].y, temp_49);
    // 0x000270: 0x5C58300000471204 Fadd
    temp_57 = 0.0 - temp_0;
    temp_58 = temp_40 + temp_57;
    // 0x000278: 0xEFD87F800A87FF12 Ald
    temp_59 = in_attr2.z;
    // 0x000288: 0x4C68101000870616 Fmul
    temp_60 = temp_44 * vp_c4.data[2].x;
    // 0x000290: 0x49A007100017150E Ffma
    temp_61 = fma(temp_41, vp_c4.data[0].y, temp_51);
    // 0x000298: 0x49A008980CE71415 Ffma
    temp_62 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_45);
    // 0x0002A8: 0x4C68101000870D11 Fmul
    temp_63 = temp_42 * vp_c4.data[2].x;
    // 0x0002B0: 0x5080000000571515 Mufu
    temp_64 = inversesqrt(temp_62);
    // 0x0002B8: 0x4C68101000070D14 Fmul
    temp_65 = temp_42 * vp_c4.data[0].x;
    // 0x0002C8: 0x4C68101000470619 Fmul
    temp_66 = temp_44 * vp_c4.data[1].x;
    // 0x0002D0: 0x4C6810100007061A Fmul
    temp_67 = temp_44 * vp_c4.data[0].x;
    // 0x0002D8: 0x4C68101000470D1C Fmul
    temp_68 = temp_42 * vp_c4.data[1].x;
    // 0x0002E8: 0x5C68100000470404 Fmul
    temp_69 = temp_58 * temp_58;
    // 0x0002F0: 0x49A0089000970F0D Ffma
    temp_70 = fma(temp_46, vp_c4.data[2].y, temp_63);
    // 0x0002F8: 0x49A00A1000170F11 Ffma
    temp_71 = fma(temp_46, vp_c4.data[0].y, temp_65);
    // 0x000308: 0x49A00B1000971814 Ffma
    temp_72 = fma(temp_48, vp_c4.data[2].y, temp_60);
    // 0x000310: 0x49A00C9000571806 Ffma
    temp_73 = fma(temp_48, vp_c4.data[1].y, temp_66);
    // 0x000318: 0x49A00D1000171818 Ffma
    temp_74 = fma(temp_48, vp_c4.data[0].y, temp_67);
    // 0x000328: 0x49A0081000670510 Ffma
    temp_75 = fma(temp_50, vp_c4.data[1].z, temp_55);
    // 0x000330: 0x5C5830000087051D Fadd
    temp_76 = 0.0 - temp_2;
    temp_77 = temp_50 + temp_76;
    // 0x000338: 0x4C6810180CC71516 Fmul
    temp_78 = temp_64 * vp_c6.data[51].x;
    // 0x000348: 0x49A0059000A70508 Ffma
    temp_79 = fma(temp_50, vp_c4.data[2].z, temp_56);
    // 0x000350: 0x49A00E1000570F0F Ffma
    temp_80 = fma(temp_46, vp_c4.data[1].y, temp_68);
    // 0x000358: 0x49A007100027050E Ffma
    temp_81 = fma(temp_50, vp_c4.data[0].z, temp_61);
    // 0x000368: 0x4C5810100077100B Fadd
    temp_82 = temp_75 + vp_c4.data[1].w;
    // 0x000370: 0x49A00C1000271718 Ffma
    temp_83 = fma(temp_52, vp_c4.data[0].z, temp_74);
    // 0x000378: 0x49A10B180CF71610 Ffma
    temp_84 = 0.0 - vp_c6.data[51].w;
    temp_85 = fma(temp_78, temp_84, temp_78);
    // 0x000388: 0x4C6810180CE71519 Fmul
    temp_86 = temp_64 * vp_c6.data[51].z;
    // 0x000390: 0x49A0069000A7120D Ffma
    temp_87 = fma(temp_59, vp_c4.data[2].z, temp_70);
    // 0x000398: 0x49A0089000271205 Ffma
    temp_88 = fma(temp_59, vp_c4.data[0].z, temp_71);
    // 0x0003A8: 0x49A0079000671212 Ffma
    temp_89 = fma(temp_59, vp_c4.data[1].z, temp_80);
    // 0x0003B0: 0x4C58101000370E11 Fadd
    temp_90 = temp_81 + vp_c4.data[0].w;
    // 0x0003B8: 0x4C68101409670B0F Fmul
    temp_91 = temp_82 * vp_c5.data[37].z;
    // 0x0003C8: 0x1E23DCCCCCD7100E Fmul32i
    temp_92 = temp_85 * 0.100000001;
    // 0x0003D0: 0x49A00A1000A71714 Ffma
    temp_93 = fma(temp_52, vp_c4.data[2].z, temp_72);
    // 0x0003D8: 0x49A0031000671717 Ffma
    temp_94 = fma(temp_52, vp_c4.data[1].z, temp_73);
    // 0x0003E8: 0x5C6810000187181C Fmul
    temp_95 = temp_83 * temp_83;
    // 0x0003F0: 0x49A10C980CF7191A Ffma
    temp_96 = 0.0 - vp_c6.data[51].w;
    temp_97 = fma(temp_86, temp_96, temp_86);
    // 0x0003F8: 0x5C68100000570510 Fmul
    temp_98 = temp_88 * temp_88;
    // 0x000408: 0x59A1078000E7110F Ffma
    temp_99 = 0.0 - temp_92;
    temp_100 = fma(temp_90, temp_99, temp_91);
    // 0x000410: 0x4C58101000B70806 Fadd
    temp_101 = temp_79 + vp_c4.data[2].w;
    // 0x000418: 0x5C58300000A70B1F Fadd
    temp_102 = 0.0 - temp_13;
    temp_103 = temp_82 + temp_102;
    // 0x000428: 0x59A00E000177170E Ffma
    temp_104 = fma(temp_94, temp_94, temp_95);
    // 0x000430: 0x1E23DCCCCCD71A1C Fmul32i
    temp_105 = temp_97 * 0.100000001;
    // 0x000438: 0x59A0080001271208 Ffma
    temp_106 = fma(temp_89, temp_89, temp_98);
    // 0x000448: 0x59A0020000770707 Ffma
    temp_107 = fma(temp_54, temp_54, temp_69);
    // 0x000450: 0x5C58300001370610 Fadd
    temp_108 = 0.0 - temp_15;
    temp_109 = temp_101 + temp_108;
    // 0x000458: 0x5C58300000C7111E Fadd
    temp_110 = 0.0 - temp_11;
    temp_111 = temp_90 + temp_110;
    // 0x000468: 0x59A007000147140E Ffma
    temp_112 = fma(temp_93, temp_93, temp_104);
    // 0x000470: 0x59A0078001C7061A Ffma
    temp_113 = fma(temp_101, temp_105, temp_100);
    // 0x000478: 0x5080000000570E0E Mufu
    temp_114 = inversesqrt(temp_112);
    // 0x000488: 0x59A0040000D70D08 Ffma
    temp_115 = fma(temp_87, temp_87, temp_106);
    // 0x000490: 0x59A20F800107FF0F Ffma
    temp_116 = 0.0 - temp_103;
    temp_117 = fma(0.0, temp_109, temp_116);
    // 0x000498: 0x5080000000570808 Mufu
    temp_118 = inversesqrt(temp_115);
    // 0x0004A8: 0x59A0038001D71D1D Ffma
    temp_119 = fma(temp_77, temp_77, temp_107);
    // 0x0004B0: 0x5C69100001E7FF04 Fmul
    temp_120 = 0.0 - temp_111;
    temp_121 = 0.0 * temp_120;
    // 0x0004B8: 0x49A00D1C23070909 Ffma
    temp_122 = fma(0.5, vp_c7.data[140].x, temp_113);
    // 0x0004C8: 0x59A10F000107FF1E Ffma
    temp_123 = 0.0 - temp_109;
    temp_124 = fma(0.0, temp_123, temp_111);
    // 0x0004D0: 0xEFD87F800AC7FF10 Ald
    temp_125 = in_attr2.w;
    // 0x0004D8: 0x4C6810180CD71515 Fmul
    temp_126 = temp_64 * vp_c6.data[51].y;
    // 0x0004E8: 0x5C68100001670F0F Fmul
    temp_127 = temp_117 * temp_78;
    // 0x0004F0: 0x5C59100001371313 Fadd
    temp_128 = 0.0 - temp_15;
    temp_129 = temp_128 + temp_15;
    // 0x0004F8: 0x59A0020001F7FF1F Ffma
    temp_130 = fma(0.0, temp_103, temp_121);
    // 0x000508: 0xEFD87F8014C7FF04 Ald
    temp_131 = in_attr12.w;
    // 0x000510: 0x3868104040070907 Fmul
    temp_132 = temp_122 * 3.0;
    // 0x000518: 0x5C9000000097001C Rro
    // 0x000528: 0x38681040A007091A Fmul
    temp_133 = temp_122 * 5.0;
    // 0x000530: 0x5080000000071C1C Mufu
    temp_134 = cos(temp_122);
    // 0x000538: 0x59A0078001571E1E Ffma
    temp_135 = fma(temp_124, temp_126, temp_127);
    // 0x000548: 0x5C68100000E71717 Fmul
    temp_136 = temp_94 * temp_114;
    // 0x000550: 0x5C68100000870505 Fmul
    temp_137 = temp_88 * temp_118;
    // 0x000558: 0x5C90000000770007 Rro
    // 0x000568: 0x5C68100000E71818 Fmul
    temp_138 = temp_83 * temp_114;
    // 0x000570: 0x5080000000070707 Mufu
    temp_139 = cos(temp_132);
    // 0x000578: 0x5C90000001A7001B Rro
    // 0x000588: 0x5C68100000E71414 Fmul
    temp_140 = temp_93 * temp_114;
    // 0x000590: 0xEFD87F801047FF0E Ald
    temp_141 = in_attr8.y;
    // 0x000598: 0x5C68100000871212 Fmul
    temp_142 = temp_89 * temp_118;
    // 0x0005A8: 0x5080000000071B1B Mufu
    temp_143 = cos(temp_133);
    // 0x0005B0: 0x5C6810000177050F Fmul
    temp_144 = temp_137 * temp_136;
    // 0x0005B8: 0x59A00F0001971F1E Ffma
    temp_145 = fma(temp_130, temp_86, temp_135);
    // 0x0005C8: 0x5080000000871D1F Mufu
    temp_146 = sqrt(temp_119);
    // 0x0005D0: 0x5C68100000870D0D Fmul
    temp_147 = temp_87 * temp_118;
    // 0x0005D8: 0xEFD87F801007FF08 Ald
    temp_148 = in_attr8.x;
    // 0x0005E8: 0x5C68100001C71C1C Fmul
    temp_149 = temp_134 * temp_134;
    // 0x0005F0: 0xEFF07F800807FF18 Ast
    out_attr0.x = temp_138;
    // 0x0005F8: 0x5C6810000147121A Fmul
    temp_150 = temp_142 * temp_140;
    // 0x000608: 0xEFF07F800847FF17 Ast
    out_attr0.y = temp_136;
    // 0x000610: 0x59A207800187120F Ffma
    temp_151 = 0.0 - temp_144;
    temp_152 = fma(temp_142, temp_138, temp_151);
    // 0x000618: 0xEFF07F800987FF0D Ast
    out_attr1.z = temp_147;
    // 0x000628: 0x5C68100001870D18 Fmul
    temp_153 = temp_147 * temp_138;
    // 0x000630: 0xEFF07F800907FF05 Ast
    out_attr1.x = temp_137;
    // 0x000638: 0x5C68100000771C1C Fmul
    temp_154 = temp_149 * temp_139;
    // 0x000648: 0xEFF07F800887FF14 Ast
    out_attr0.z = temp_140;
    // 0x000650: 0x59A20D0001770D1A Ffma
    temp_155 = 0.0 - temp_150;
    temp_156 = fma(temp_147, temp_136, temp_155);
    // 0x000658: 0xEFF07F800947FF12 Ast
    out_attr1.y = temp_142;
    // 0x000668: 0x59A20C0001470517 Ffma
    temp_157 = 0.0 - temp_153;
    temp_158 = fma(temp_137, temp_140, temp_157);
    // 0x000670: 0x5C68120001B71C1B Fmul
    temp_159 = temp_154 * 0.5;
    temp_160 = temp_159 * temp_143;
    // 0x000678: 0x5C58100001370618 Fadd
    temp_161 = temp_101 + temp_129;
    // 0x000688: 0x5C68100001F7151C Fmul
    temp_162 = temp_126 * temp_146;
    // 0x000690: 0x4C98079C23070015 Mov
    // 0x000698: 0x32A008BF00070B13 Ffma
    temp_163 = fma(temp_82, 0.5, temp_90);
    // 0x0006A8: 0x5C68100001071A1A Fmul
    temp_164 = temp_156 * temp_125;
    // 0x0006B0: 0x5C68100001071717 Fmul
    temp_165 = temp_158 * temp_125;
    // 0x0006B8: 0xEFF07F800A07FF1A Ast
    out_attr2.x = temp_164;
    // 0x0006C8: 0x49A0099407571513 Ffma
    temp_166 = fma(vp_c7.data[140].x, vp_c5.data[29].y, temp_163);
    // 0x0006D0: 0xEFF07F800A47FF17 Ast
    out_attr2.y = temp_165;
    // 0x0006D8: 0x5C68100001070F15 Fmul
    temp_167 = temp_152 * temp_125;
    // 0x0006E8: 0x4C68101409770909 Fmul
    temp_168 = temp_122 * vp_c5.data[37].w;
    // 0x0006F0: 0xEFF07F800A87FF15 Ast
    out_attr2.z = temp_167;
    // 0x0006F8: 0x5C90000001370013 Rro
    // 0x000708: 0x4C68101409570407 Fmul
    temp_169 = temp_131 * vp_c5.data[37].y;
    // 0x000710: 0x5080000000071310 Mufu
    temp_170 = cos(temp_166);
    // 0x000718: 0x5C68100001F71616 Fmul
    temp_171 = temp_78 * temp_146;
    // 0x000728: 0x5C68100001F71919 Fmul
    temp_172 = temp_86 * temp_146;
    // 0x000730: 0x59A00C0000B7FF18 Ffma
    temp_173 = fma(0.0, temp_82, temp_161);
    // 0x000738: 0x5C90000000970009 Rro
    // 0x000748: 0x5080000000170909 Mufu
    temp_174 = sin(temp_168);
    // 0x000750: 0x4C6810180CF70707 Fmul
    temp_175 = temp_169 * vp_c6.data[51].w;
    // 0x000758: 0x4C68101407671010 Fmul
    temp_176 = temp_170 * vp_c5.data[29].z;
    // 0x000768: 0x5C68100001670716 Fmul
    temp_177 = temp_175 * temp_171;
    // 0x000770: 0x5C68100001970719 Fmul
    temp_178 = temp_175 * temp_172;
    // 0x000778: 0x5C68100001C70714 Fmul
    temp_179 = temp_175 * temp_162;
    // 0x000788: 0x1E23DCCCCCD70905 Fmul32i
    temp_180 = temp_174 * 0.100000001;
    // 0x000790: 0x59A10C000117FF09 Ffma
    temp_181 = 0.0 - temp_90;
    temp_182 = fma(0.0, temp_181, temp_173);
    // 0x000798: 0x5C68100001971B12 Fmul
    temp_183 = temp_160 * temp_178;
    // 0x0007A8: 0x5C68100001471B14 Fmul
    temp_184 = temp_160 * temp_179;
    // 0x0007B0: 0x59A0028001B71E1E Ffma
    temp_185 = fma(temp_145, temp_160, temp_180);
    // 0x0007B8: 0x5C68100001671B05 Fmul
    temp_186 = temp_160 * temp_177;
    // 0x0007C8: 0x49A0048400071209 Ffma
    temp_187 = fma(temp_183, vp_c1.data[0].x, temp_182);
    // 0x0007D0: 0x1E23CF5C28F71414 Fmul32i
    temp_188 = temp_184 * 0.0299999993;
    // 0x0007D8: 0x1E23CF5C28F70505 Fmul32i
    temp_189 = temp_186 * 0.0299999993;
    // 0x0007E8: 0x5C6810000007000F Fmul
    temp_190 = temp_36 * temp_36;
    // 0x0007F0: 0x5C58100000270002 Fadd
    temp_191 = temp_36 + temp_38;
    // 0x0007F8: 0x5C58100000370103 Fadd
    temp_192 = temp_37 + temp_39;
    // 0x000808: 0x59A007800017010D Ffma
    temp_193 = fma(temp_37, temp_37, temp_190);
    // 0x000810: 0x5084000000870D0D Mufu
    temp_194 = sqrt(temp_193);
    temp_195 = clamp(temp_194, 0.0, 1.0);
    // 0x000818: 0x5C68100000D71010 Fmul
    temp_196 = temp_176 * temp_195;
    // 0x000828: 0x49A008140747020F Ffma
    temp_197 = fma(temp_191, vp_c5.data[29].x, temp_196);
    // 0x000830: 0x4CB0119002371A10 F2i
    temp_198 = trunc(vp_c4.data[8].w);
    temp_199 = int(temp_198);
    // 0x000838: 0x5C68100000470202 Fmul
    temp_200 = temp_191 * temp_131;
    // 0x000848: 0x5C68100000470F00 Fmul
    temp_201 = temp_197 * temp_131;
    // 0x000850: 0x5C68100000470304 Fmul
    temp_202 = temp_192 * temp_131;
    // 0x000858: 0x59A0000000771E00 Ffma
    temp_203 = fma(temp_185, temp_175, temp_201);
    // 0x000868: 0x384800000047100F Shl
    temp_204 = temp_199 << 4;
    // 0x000870: 0x5C90000000070010 Rro
    // 0x000878: 0xEF94007048870F00 Ldc
    temp_205 = temp_204 + 0x488;
    temp_206 = uint(temp_205) >> 2;
    temp_207 = temp_206 >> 2;
    temp_208 = int(temp_206) & 3;
    temp_209 = vp_c7.data[int(temp_207)][temp_208];
    // 0x000888: 0xEF94007068870F16 Ldc
    temp_210 = temp_204 + 0x688;
    temp_211 = uint(temp_210) >> 2;
    temp_212 = temp_211 >> 2;
    temp_213 = int(temp_211) & 3;
    temp_214 = vp_c7.data[int(temp_212)][temp_213];
    // 0x000890: 0x5080000000071007 Mufu
    temp_215 = cos(temp_203);
    // 0x000898: 0x508000000017100D Mufu
    temp_216 = sin(temp_203);
    // 0x0008A8: 0x4C98079400370010 Mov
    // 0x0008B0: 0x5C68100000770A13 Fmul
    temp_217 = temp_13 * temp_215;
    // 0x0008B8: 0x5C69100000D70A12 Fmul
    temp_218 = 0.0 - temp_216;
    temp_219 = temp_13 * temp_218;
    // 0x0008C8: 0x59A3098000D70C13 Ffma
    temp_220 = 0.0 - temp_216;
    temp_221 = 0.0 - temp_217;
    temp_222 = fma(temp_11, temp_220, temp_221);
    // 0x0008D0: 0x59A3090000770C12 Ffma
    temp_223 = 0.0 - temp_215;
    temp_224 = 0.0 - temp_219;
    temp_225 = fma(temp_11, temp_223, temp_224);
    // 0x0008D8: 0x59A00B0000070909 Ffma
    temp_226 = fma(temp_187, temp_209, temp_214);
    // 0x0008E8: 0xEF95007048070F00 Ldc
    temp_227 = temp_204 + 0x480;
    temp_228 = uint(temp_227) >> 2;
    temp_229 = temp_228 >> 2;
    temp_230 = int(temp_228) & 3;
    temp_231 = vp_c7.data[int(temp_229)][temp_230];
    temp_232 = int(temp_228) + 1;
    temp_233 = uint(temp_232) >> 2;
    temp_234 = temp_232 & 3;
    temp_235 = vp_c7.data[int(temp_233)][temp_234];
    // 0x0008F0: 0x5C58100001370A13 Fadd
    temp_236 = temp_13 + temp_222;
    // 0x0008F8: 0xEFF07F800D87FF09 Ast
    out_attr5.z = temp_226;
    // 0x000908: 0x5C58100001270C0C Fadd
    temp_237 = temp_11 + temp_225;
    // 0x000910: 0x5C68100001F7020A Fmul
    temp_238 = temp_200 * temp_146;
    // 0x000918: 0xEF95007068070F02 Ldc
    temp_239 = temp_204 + 0x680;
    temp_240 = uint(temp_239) >> 2;
    temp_241 = temp_240 >> 2;
    temp_242 = int(temp_240) & 3;
    temp_243 = vp_c7.data[int(temp_241)][temp_242];
    temp_244 = int(temp_240) + 1;
    temp_245 = uint(temp_244) >> 2;
    temp_246 = temp_244 & 3;
    temp_247 = vp_c7.data[int(temp_245)][temp_246];
    // 0x000928: 0x5C68100001F7041F Fmul
    temp_248 = temp_202 * temp_146;
    // 0x000930: 0x59A009800067FF04 Ffma
    temp_249 = fma(0.0, temp_101, temp_236);
    // 0x000938: 0x59A006000067FF0C Ffma
    temp_250 = fma(0.0, temp_101, temp_237);
    // 0x000948: 0x49A0029407770A05 Ffma
    temp_251 = fma(temp_238, vp_c5.data[29].w, temp_189);
    // 0x000950: 0x49A00A1407771F1F Ffma
    temp_252 = fma(temp_248, vp_c5.data[29].w, temp_188);
    // 0x000958: 0x4C5810180BA70906 Fadd
    temp_253 = temp_226 + vp_c6.data[46].z;
    // 0x000968: 0x59A0020000770B04 Ffma
    temp_254 = fma(temp_82, temp_215, temp_249);
    // 0x000970: 0x59A1060000D70B0C Ffma
    temp_255 = 0.0 - temp_216;
    temp_256 = fma(temp_82, temp_255, temp_250);
    // 0x000978: 0x4C9807940027000B Mov
    // 0x000988: 0x59A0020000D71104 Ffma
    temp_257 = fma(temp_90, temp_216, temp_254);
    // 0x000990: 0x59A006000077110C Ffma
    temp_258 = fma(temp_90, temp_215, temp_256);
    // 0x000998: 0x51A0059400470E07 Ffma
    temp_259 = fma(temp_141, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0009A8: 0x51A0081400570E0E Ffma
    temp_260 = fma(temp_141, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0009B0: 0x4C58300C0377090D Fadd
    temp_261 = 0.0 - vp_c3.data[13].w;
    temp_262 = temp_226 + temp_261;
    // 0x0009B8: 0x5C58100001F70404 Fadd
    temp_263 = temp_257 + temp_252;
    // 0x0009C8: 0xEFF07F800B87FF0D Ast
    out_attr3.z = temp_262;
    // 0x0009D0: 0x5C58100000570C05 Fadd
    temp_264 = temp_258 + temp_251;
    // 0x0009D8: 0x49A003940007080F Ffma
    temp_265 = fma(temp_148, vp_c5.data[0].x, temp_259);
    // 0x0009E8: 0x4C6810180CA70607 Fmul
    temp_266 = temp_253 * vp_c6.data[50].z;
    // 0x0009F0: 0xEFF07F800E07FF0F Ast
    out_attr6.x = temp_265;
    // 0x0009F8: 0x59A0018000170401 Ffma
    temp_267 = fma(temp_263, temp_235, temp_247);
    // 0x000A08: 0x59A0010000070504 Ffma
    temp_268 = fma(temp_264, temp_231, temp_243);
    // 0x000A10: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_267;
    // 0x000A18: 0x4C6810180C270605 Fmul
    temp_269 = temp_253 * vp_c6.data[48].z;
    // 0x000A28: 0xEFF07F800D07FF04 Ast
    out_attr5.x = temp_268;
    // 0x000A30: 0x4C6810180C670603 Fmul
    temp_270 = temp_253 * vp_c6.data[49].z;
    // 0x000A38: 0x4C5810180B970106 Fadd
    temp_271 = temp_267 + vp_c6.data[46].y;
    // 0x000A48: 0x4C5830180B07040A Fadd
    temp_272 = 0.0 - vp_c6.data[44].x;
    temp_273 = temp_268 + temp_272;
    // 0x000A50: 0x4C68100C00070402 Fmul
    temp_274 = temp_268 * vp_c3.data[0].x;
    // 0x000A58: 0x4C68100C00870400 Fmul
    temp_275 = temp_268 * vp_c3.data[2].x;
    // 0x000A68: 0x49A0071400170810 Ffma
    temp_276 = fma(temp_148, vp_c5.data[0].y, temp_260);
    // 0x000A70: 0x4C68100C00470408 Fmul
    temp_277 = temp_268 * vp_c3.data[1].x;
    // 0x000A78: 0xEFF07F800E47FF10 Ast
    out_attr6.y = temp_276;
    // 0x000A88: 0x4C5830180B17010C Fadd
    temp_278 = 0.0 - vp_c6.data[44].y;
    temp_279 = temp_267 + temp_278;
    // 0x000A90: 0x4C68101803870A0A Fmul
    temp_280 = temp_273 * vp_c6.data[14].x;
    // 0x000A98: 0x49A003980C97060B Ffma
    temp_281 = fma(temp_271, vp_c6.data[50].y, temp_266);
    // 0x000AA8: 0x49A0010C00170107 Ffma
    temp_282 = fma(temp_267, vp_c3.data[0].y, temp_274);
    // 0x000AB0: 0x49A002980C170605 Ffma
    temp_283 = fma(temp_271, vp_c6.data[48].y, temp_269);
    // 0x000AB8: 0x49A001980C570603 Ffma
    temp_284 = fma(temp_271, vp_c6.data[49].y, temp_270);
    // 0x000AC8: 0x49A0000C00970100 Ffma
    temp_285 = fma(temp_267, vp_c3.data[2].y, temp_275);
    // 0x000AD0: 0x4C58101002070906 Fadd
    temp_286 = temp_226 + vp_c4.data[8].x;
    // 0x000AD8: 0x49A0051803970C0E Ffma
    temp_287 = fma(temp_279, vp_c6.data[14].y, temp_280);
    // 0x000AE8: 0x49A0040C00570108 Ffma
    temp_288 = fma(temp_267, vp_c3.data[1].y, temp_277);
    // 0x000AF0: 0x49A0038C0027090C Ffma
    temp_289 = fma(temp_226, vp_c3.data[0].z, temp_282);
    // 0x000AF8: 0x4C5810180B87040A Fadd
    temp_290 = temp_268 + vp_c6.data[46].x;
    // 0x000B08: 0x49A0000C00A70902 Ffma
    temp_291 = fma(temp_226, vp_c3.data[2].z, temp_285);
    // 0x000B10: 0x49A0000C00A70600 Ffma
    temp_292 = fma(temp_286, vp_c3.data[2].z, temp_285);
    // 0x000B18: 0x49A0038C00270607 Ffma
    temp_293 = fma(temp_286, vp_c3.data[0].z, temp_282);
    // 0x000B28: 0x49A0040C00670606 Ffma
    temp_294 = fma(temp_286, vp_c3.data[1].z, temp_288);
    // 0x000B30: 0x49A0040C00670908 Ffma
    temp_295 = fma(temp_226, vp_c3.data[1].z, temp_288);
    // 0x000B38: 0x4C58100C00370C0C Fadd
    temp_296 = temp_289 + vp_c3.data[0].w;
    // 0x000B48: 0x49A002980C070A05 Ffma
    temp_297 = fma(temp_290, vp_c6.data[48].x, temp_283);
    // 0x000B50: 0x4C5830180B27090D Fadd
    temp_298 = 0.0 - vp_c6.data[44].z;
    temp_299 = temp_226 + temp_298;
    // 0x000B58: 0x49A001980C470A03 Ffma
    temp_300 = fma(temp_290, vp_c6.data[49].x, temp_284);
    // 0x000B68: 0x4C58300C02F7040F Fadd
    temp_301 = 0.0 - vp_c3.data[11].w;
    temp_302 = temp_268 + temp_301;
    // 0x000B70: 0x4C58100C00770808 Fadd
    temp_303 = temp_295 + vp_c3.data[1].w;
    // 0x000B78: 0xEFF07F800B07FF0F Ast
    out_attr3.x = temp_302;
    // 0x000B88: 0x4C68101802C70C09 Fmul
    temp_304 = temp_296 * vp_c6.data[11].x;
    // 0x000B90: 0x4C58100C00370707 Fadd
    temp_305 = temp_293 + vp_c3.data[0].w;
    // 0x000B98: 0x4C6810180BB70504 Fmul
    temp_306 = temp_297 * vp_c6.data[46].w;
    // 0x000BA8: 0x4C58300C03370110 Fadd
    temp_307 = 0.0 - vp_c3.data[12].w;
    temp_308 = temp_267 + temp_307;
    // 0x000BB0: 0xEFF07F801107FF04 Ast
    out_attr9.x = temp_306;
    // 0x000BB8: 0x49A0049802D70808 Ffma
    temp_309 = fma(temp_303, vp_c6.data[11].y, temp_304);
    // 0x000BC8: 0xEFF07F800B47FF10 Ast
    out_attr3.y = temp_308;
    // 0x000BD0: 0x4C6810180BB70309 Fmul
    temp_310 = temp_300 * vp_c6.data[46].w;
    // 0x000BD8: 0x4C58100C00B70205 Fadd
    temp_311 = temp_291 + vp_c3.data[2].w;
    // 0x000BE8: 0xEFF07F801147FF09 Ast
    out_attr9.y = temp_310;
    // 0x000BF0: 0x49A0071803A70D0D Ffma
    temp_312 = fma(temp_299, vp_c6.data[14].z, temp_287);
    // 0x000BF8: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_311;
    // 0x000C08: 0x4C68100C02470701 Fmul
    temp_313 = temp_305 * vp_c3.data[9].x;
    // 0x000C10: 0x4C98079803C70002 Mov
    // 0x000C18: 0x4C68100C01C70703 Fmul
    temp_314 = temp_305 * vp_c3.data[7].x;
    // 0x000C28: 0x4C68100C02870704 Fmul
    temp_315 = temp_305 * vp_c3.data[10].x;
    // 0x000C30: 0x4C58100C00770606 Fadd
    temp_316 = temp_294 + vp_c3.data[1].w;
    // 0x000C38: 0x4C68100C02070707 Fmul
    temp_317 = temp_305 * vp_c3.data[8].x;
    // 0x000C48: 0x4C58100C00B70000 Fadd
    temp_318 = temp_292 + vp_c3.data[2].w;
    // 0x000C50: 0x51A0011803B70D0D Ffma
    temp_319 = fma(temp_312, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000C58: 0x49A005980C870A0B Ffma
    temp_320 = fma(temp_290, vp_c6.data[50].x, temp_281);
    // 0x000C68: 0xEFF07F801047FF0D Ast
    out_attr8.y = temp_319;
    // 0x000C70: 0x49A0008C02570601 Ffma
    temp_321 = fma(temp_316, vp_c3.data[9].y, temp_313);
    // 0x000C78: 0x49A0018C01D70603 Ffma
    temp_322 = fma(temp_316, vp_c3.data[7].y, temp_314);
    // 0x000C88: 0x49A0020C02970602 Ffma
    temp_323 = fma(temp_316, vp_c3.data[10].y, temp_315);
    // 0x000C90: 0x49A0038C02170607 Ffma
    temp_324 = fma(temp_316, vp_c3.data[8].y, temp_317);
    // 0x000C98: 0x4C9807980307000A Mov
    // 0x000CA8: 0x49A0041802E70508 Ffma
    temp_325 = fma(temp_311, vp_c6.data[11].z, temp_309);
    // 0x000CB0: 0x49A0008C02670001 Ffma
    temp_326 = fma(temp_318, vp_c3.data[9].z, temp_321);
    // 0x000CB8: 0x49A0018C01E70003 Ffma
    temp_327 = fma(temp_318, vp_c3.data[7].z, temp_322);
    // 0x000CC8: 0x49A0010C02A70002 Ffma
    temp_328 = fma(temp_318, vp_c3.data[10].z, temp_323);
    // 0x000CD0: 0x49A0038C02270007 Ffma
    temp_329 = fma(temp_318, vp_c3.data[8].z, temp_324);
    // 0x000CD8: 0x4C6810180BB70B0B Fmul
    temp_330 = temp_320 * vp_c6.data[46].w;
    // 0x000CE8: 0x51A0051802F70808 Ffma
    temp_331 = fma(temp_325, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000CF0: 0xEFF07F801187FF0B Ast
    out_attr9.z = temp_330;
    // 0x000CF8: 0x4C58100C02770101 Fadd
    temp_332 = temp_326 + vp_c3.data[9].w;
    // 0x000D08: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_331;
    // 0x000D10: 0x4C58100C01F70303 Fadd
    temp_333 = temp_327 + vp_c3.data[7].w;
    // 0x000D18: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_332;
    // 0x000D28: 0x4C58100C02B70202 Fadd
    temp_334 = temp_328 + vp_c3.data[10].w;
    // 0x000D30: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_333;
    // 0x000D38: 0x4C58100C02370707 Fadd
    temp_335 = temp_329 + vp_c3.data[8].w;
    // 0x000D48: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_334;
    // 0x000D50: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_335;
    // 0x000D58: 0xE30000000007000F Exit
    return;
}
